# syntax=docker/dockerfile:1
# Dockerfile for CuriaBots Landing Page (Astro SSG)
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve with Nginx + njs for auth-aware redirect
FROM nginx:alpine
RUN apk add --no-cache nginx-module-njs
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY auth_redirect.js /etc/nginx/auth_redirect.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
