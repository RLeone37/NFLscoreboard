# NFL Scoreboard — GitHub Pages (Client-Refresh)

This repo serves a **live NFL scoreboard** via GitHub Pages. It fetches the ESPN public scoreboard API **in the browser** and refreshes **every 30 seconds**—no servers or Actions required.

**Live refresh is done client-side**, so as long as the page is open it will stay up to date.

## Quick start
1. Create a repo, e.g. `NFLscoreboard` under your GitHub account.
2. Put these files in your repo root:
   - `index.html`
   - `.nojekyll`
3. Commit & push.
4. Enable GitHub Pages: **Settings → Pages → Build and deployment → Deploy from a branch**, select your default branch (e.g., `main`), and root `/` folder.
5. Open: `https://<your-username>.github.io/NFLscoreboard/`

## Optional: CORS proxy (if your network blocks the ESPN JSON)
Most users won’t need this. If you see CORS failures in the browser console, deploy `worker_cf_proxy.js` as a **Cloudflare Worker** and replace the `API` constant in `index.html` with your worker URL.

### Cloudflare Worker
1. Create a Worker, paste the content of `worker_cf_proxy.js`, and deploy.
2. Set `const API = "https://<your-worker-subdomain>.workers.dev/nfl";` in `index.html`.
