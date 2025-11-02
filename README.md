# Live NFL Scoreboard (Fixed, Local Logos)

This package replaces team-abbreviation blocks with your local logos from the folder **NFL logos/** (note the space).

## How to use
1. Put your team images in the **NFL logos/** folder next to `index.html` using uppercase abbreviations (e.g., `BUF.png`, `DAL.png`). SVG/WEBP also work.
2. Open `index.html` in a browser.
3. If you see an error banner, open DevTools → Console for details.

## Common causes of a white screen
- `NFL logos/` folder name is different or misspelled (remember the space).
- Filenames not uppercase or different extensions than expected.
- Static host rewriting paths with spaces. If needed, rename the folder to `NFL-logos` and change `LOGO_DIR` inside `index.html`.
