# VRT Garage — AI 101 Midterm Prototype

**Tagline:** Your Vision. Your Build.

**Audience:** Car enthusiasts who want to explore vehicles and compare visual styles before planning expensive modifications.

**Purpose:** VRT Garage is the first version of a planned virtual automotive customization website. This prototype focuses on an interactive showroom rather than claiming to render real vehicle modifications.

## Working features
1. **Vehicle selection:** Choose Shelby GT500, Nissan GT-R R35, or Toyota GR Supra to update the vehicle photo, description, and details.
2. **Shelby photo gallery:** Browse front and rear reference photos using Next Photo, Previous Photo, overlay arrows, or thumbnails. The GT-R and Supra intentionally have one photo each.
3. **Website navigation:** Move between Home, Showroom, Customize, My Garage, and About. The Customize and My Garage sections describe future work, not functional editors.

## How to run
1. Download or clone this repository.
2. Open the folder containing `index.html`, `style.css`, and `script.js` in VS Code.
3. Right-click `index.html` and select **Open with Live Server** (optional extension), or double-click `index.html` to open it in a browser.
4. With an internet connection, go to **Showroom**, select the cars, and navigate the Shelby gallery.

There is no build step, database, paid API, or login.

## Development and GitHub evidence
- [Issue #1 — Improve Shelby GT500 Gallery Navigation](https://github.com/JusWillx/ai101-midterm-project/issues/1) — closed.
- [Pull Request #2 — Improve Shelby GT500 Gallery Navigation](https://github.com/JusWillx/ai101-midterm-project/pull/2) — merged.
- The pull request added a labeled **Next Photo** control. During review, a regression involving two removed event listeners was identified and corrected before merging.
- Five user-performed browser checks were reported as passing; see [TEST-LOG.md](TEST-LOG.md). Exact test date/browser metadata and screenshot filenames should be recorded when available.

## AI assistance
ChatGPT helped plan the concept, draft HTML/CSS/JavaScript, revise the gallery, and prepare testing and documentation. The student chose the final prototype scope, edited the navigation listeners after code review, tested the gallery, and used GitHub to track the change. See [AI-USE-NOTE.md](AI-USE-NOTE.md). **There is no live AI API in the prototype.**

## Limitations
- Vehicle photographs come from external Wikimedia Commons links and require an internet connection. Links can fail.
- The black Shelby homepage photo is a different vehicle photograph from the two Shelby showroom views.
- There is no functioning paint selector, parts configurator, personal photo upload, saved garage, or AI editing.
- Selected vehicle and gallery state are not persisted after refresh.
- The offline image-load failure case is documented as a limitation, not as a passed browser test.

## Files and evidence
- `index.html` — page structure.
- `style.css` — styling and responsive layout.
- `script.js` — vehicle selector and gallery.
- `AGENTS.md` — coding assistant instructions.
- `AI-USE-NOTE.md` — AI disclosure.
- `TEST-LOG.md` — five user-reported browser tests and limitation.
- `ISSUE-AND-PR.md` — tracked development change.
- `DEMO-SCRIPT.md` — demonstration outline.
- `evidence/` — place original-gallery, updated-gallery, and merged-PR screenshots here.

## Photo credits
Images are attributed in the website, with links to their Wikimedia Commons file pages and stated licenses. Check the original file pages before using the imagery outside this class project.
