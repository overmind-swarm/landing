# Landing

CuriaBots landing page — static site built with [Astro](https://astro.build/).

## Development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # Output in dist/
npm run preview    # Preview the build locally
```

## Production

Production builds are automated via GitHub Actions on push to `main`. See `.github/workflows/docker-publish.yml`.

Manual production workflow:

```bash
make prod-release  # Build + push + deploy
```

## i18n

- English: `/` (default)
- Spanish: `/es/`

Translations are in `src/i18n/index.ts`.
