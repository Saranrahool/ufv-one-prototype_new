# UFV One — Cloudflare Pages Ready

## Build
```bash
npm install
npm run build
# optional SPA fallback
cp dist/index.html dist/404.html
```
## Publish
- Cloudflare Pages → Create project → **Upload assets** → upload contents of `dist/`
- Or use Wrangler:
```bash
npm install -g wrangler
wrangler pages publish dist
```
