# UFV_One — GitHub Pages Demo

This is a Vite + React + TypeScript + Tailwind setup that renders your UFV_One component and deploys to **GitHub Pages** using Actions.

## Quick start

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (public or private).
2. Push this project to a branch named `main`.
3. The GitHub Action in `.github/workflows/gh-pages.yml` will:
   - Auto-detect your repo name and set Vite's `base` accordingly.
   - Build the app.
   - Publish to the `gh-pages` branch.
4. In your repository settings:
   - Go to **Settings → Pages**.
   - Set **Source** to **GitHub Actions**.

The site will be available at:
```
https://<your-username>.github.io/<REPO_NAME>/
```

> If you ever need to set the base path manually, update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/<REPO_NAME>/',
})
```

## Where to edit

- App entry: `src/App.tsx`
- Your component: `src/xspace_prototype.tsx` (copied from your upload)
- Tailwind styles: `src/index.css`
