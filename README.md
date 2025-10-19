# NFL Scoreboard — GitHub Pages (Grouped, 30s refresh)

This repo serves a live NFL scoreboard page that groups today's games into **In Progress**, **Upcoming**, and **Completed**. It refreshes every **30 seconds** in the browser.

## Setup (GitHub Pages)
1. Create a repo (e.g., `NFLscoreboard`).
2. Put these files in the repo root:
   - `index.html`
   - `.nojekyll`
   - `README.md` (optional)
3. Commit & push.
4. Enable GitHub Pages: **Settings → Pages → Build & deployment → Deploy from a branch**. Choose your default branch (e.g., `main`) and **root** folder.
5. Visit `https://<your-username>.github.io/NFLscoreboard/`.

If your network blocks ESPN JSON due to CORS, a simple proxy (like a Cloudflare Worker) can forward the JSON with permissive CORS headers.
