# character-permutations

A minimal Vite + React + TypeScript app that displays a random permutation of character images across a row of position slots.

Live: https://jvn.tf/character-permutations/

## Prerequisites

- Node.js 20+ (the deploy workflow pins 20)
- npm 10+

## Run locally

```sh
npm install
npm run dev
```

Vite prints a local URL (typically http://localhost:5173/character-permutations/). Open it and click **Randomize** to reshuffle.

## Other scripts

```sh
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Project layout

```
public/chars/<position>/<char>.png   # 11 dirs (positions) × 20 images (characters)
src/App.tsx                          # picks a random permutation and renders the row
src/index.css                        # responsive grid sized to fit the viewport
vite.config.ts                       # base path is set to /character-permutations/
```

The image paths are built with `import.meta.env.BASE_URL` so they work both at the
local dev base and at the deployed GitHub Pages base.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the app and
publishes `dist/` to GitHub Pages.
