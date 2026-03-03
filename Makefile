# ----------------------------------------------------------------
# Landing - Production Build & Deploy
# ----------------------------------------------------------------
# Versioning: semver from git tags (e.g., v1.2.3 -> 1.2.3)
#             Same source of truth as CI/CD pipeline.
#             Conventional commits determine bumps automatically.
#
# Registry:   registry.overmind-platform.svc:5000 (via port-forward)
#
# Dev builds are handled by Tilt — this Makefile is prod-only.
#
# Usage:
#   make help              Show available targets
#   make prod-build        Build Docker image
#   make prod-push         Build + push to prod cluster registry
#   make prod-deploy       Apply kustomize overlay to production
#   make prod-release      Build + push + deploy to production
# ----------------------------------------------------------------

IMAGE_NAME   := landing

# Production cluster registry (accessed via port-forward)
PROD_REGISTRY      := registry.overmind-platform.svc:5000
PROD_LOCAL_PORT    := 5050
PROD_CONTEXT       := overmind
PROD_NAMESPACE     := overmind-system

# --- Derived values ---
GIT_HASH     := $(shell git rev-parse --short=7 HEAD 2>/dev/null || echo "nogit")

# Version from git tags (same source as CI/CD pipeline)
VERSION := $(shell git tag --list 'v[0-9]*.[0-9]*.[0-9]*' --sort=-v:refname 2>/dev/null | head -1 | sed 's/^v//')
ifeq ($(VERSION),)
  VERSION := 0.0.0
endif

PROD_IMAGE := localhost:$(PROD_LOCAL_PORT)/$(IMAGE_NAME):$(VERSION)

.PHONY: help version prod-build prod-push prod-deploy prod-release clean

help: ## Show this help
	@echo ""
	@echo "  $(IMAGE_NAME) - Production Image Manager"
	@echo "  ─────────────────────────────────────────"
	@echo "  Version  : $(VERSION) (git tag)"
	@echo "  Registry : $(PROD_REGISTRY)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'
	@echo ""

version: ## Print current version from git tags
	@echo "$(VERSION)"

prod-build: ## Build Docker image
	@if [ "$(VERSION)" = "0.0.0" ]; then \
		echo "Error: no git tag found. Tag the repo first (e.g., git tag v1.0.0)."; \
		exit 1; \
	fi
	@echo "Building $(IMAGE_NAME):$(VERSION) for production..."
	DOCKER_BUILDKIT=1 docker build \
		--label "org.opencontainers.image.version=$(VERSION)" \
		--label "org.opencontainers.image.revision=$(GIT_HASH)" \
		-t $(PROD_IMAGE) \
		.
	@echo "Build complete: $(PROD_IMAGE)"

prod-push: prod-build ## Build and push image to production cluster registry
	@echo "Starting port-forward to production registry..."
	@kubectl --context=$(PROD_CONTEXT) port-forward -n overmind-platform svc/registry $(PROD_LOCAL_PORT):5000 &
	@PF_PID=$$!; \
	sleep 3; \
	echo "Pushing $(IMAGE_NAME):$(VERSION) to production registry..."; \
	docker push $(PROD_IMAGE); \
	kill $$PF_PID 2>/dev/null; \
	echo "Push complete: $(PROD_REGISTRY)/$(IMAGE_NAME):$(VERSION)"

prod-deploy: ## Deploy current git-tag version to production via kustomize
	@if [ "$(VERSION)" = "0.0.0" ]; then \
		echo "Error: no git tag found."; \
		exit 1; \
	fi
	@echo "Deploying $(IMAGE_NAME):$(VERSION) to production..."
	@sed -i "s|$(PROD_REGISTRY)/$(IMAGE_NAME):latest|$(PROD_REGISTRY)/$(IMAGE_NAME):$(VERSION)|g" deploy/overlays/prod/kustomization.yaml
	kubectl --context=$(PROD_CONTEXT) apply -k deploy/overlays/prod/
	kubectl --context=$(PROD_CONTEXT) rollout status deployment/$(IMAGE_NAME) -n $(PROD_NAMESPACE) --timeout=180s
	@git checkout deploy/overlays/prod/kustomization.yaml
	@echo "Deploy complete: $(IMAGE_NAME):$(VERSION)"

prod-release: prod-push prod-deploy ## Build + push + deploy to production
	@echo "Production release complete: $(PROD_REGISTRY)/$(IMAGE_NAME):$(VERSION)"

clean: ## Remove all local images for this image name
	@echo "Cleaning local images for $(IMAGE_NAME) ..."
	@docker images --filter "reference=*/$(IMAGE_NAME)" --format '{{.Repository}}:{{.Tag}}' | \
		xargs -r docker rmi -f 2>/dev/null || true
	@echo "Clean complete"
