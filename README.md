# VRT Garage — Midterm Prototype (Stage 2.2)

**Tagline:** Your Vision. Your Build.  
**Audience:** Car enthusiasts, especially those considering cosmetic changes who want inspiration and a place to compare car styles before spending money.  
**Need:** It can be hard to picture and compare potential vehicle builds before making expensive decisions. This prototype provides a browseable starting point; it does not preview modifications yet.

## What actually works
1. **Vehicle selector:** Choose Shelby GT500, Nissan GT-R R35, or Toyota GR Supra. The showroom updates the selected car's name, description, preview image, category, and photo credit.
2. **Featured-car gallery:** The Shelby has front and rear photos represented as coming from the same auto-show display. Use the arrows or thumbnails to switch views. The GT-R and Supra each intentionally show one image.
3. **Responsive site navigation:** Move among Home, Showroom, Customize (roadmap only), My Garage (roadmap only), and About; on smaller screens a navigation toggle is available.

**Not implemented:** Actual visual customization, vehicle upload, image editing, saved builds, accounts, real parts prices, or a live AI service. "Customize" and "My Garage" are informational placeholders, not working modification features.

## Run (Windows/Mac)
1. Download and unzip the project folder, then open `VRT-Garage` in VS Code.
2. Install the optional VS Code **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` > **Open with Live Server**, or double-click `index.html` from File Explorer/Finder.
4. With an internet connection, navigate to **Showroom**. Click each model, then use the Shelby's next/previous arrows and thumbnails.
5. If images fail, inspect the fallback and try again online. The site itself needs no API key or server backend.

## File guide
- `index.html` — semantic page layout and showroom controls.
- `style.css` — dark/red styling and responsive rules.
- `script.js` — vehicle records, event handlers, image-gallery logic, photo failure fallback.
- `TEST-LOG.md` — executed source checks and manual tests awaiting browser confirmation.
- `AI-USE-NOTE.md` — specific AI contribution and human verification responsibilities.
- `ISSUE-AND-PR.md` — ready-to-use GitHub issue, acceptance criteria, PR description, and steps.
- `DEMO-SCRIPT.md` — five-minute walkthrough.
- `evidence/` — screenshot instructions; 

## Known limitations and risks
- Network access is needed to load car photographs. External URLs may stop working; gallery fallback appears if a photo cannot load.
- The Shelby gallery sources are described as front/rear from a single 2019 Cleveland Auto Show display. The **black Mustang hero is a separate photograph**; this isn't a complete dealership photo shoot.
- The Nissan/Supra have only one image each. Car images depict example cars, not vehicles for sale.
- Selection isn't saved when refreshing. No login or database.
- Descriptions are general; no claim of verified fitment, safety, prices, or real-world modifications.
- The mobile menu and image loading require testing on the student's own browser; static checks alone don't verify rendering.

## AI disclosure and academic process
ChatGPT assisted with naming, planning, website code, documentation, test-plan creation and review. There is **no live AI feature** in this prototype. See `AI-USE-NOTE.md` for representative prompts and what remains for the student to verify/customize.

**GitHub issue/pull request are not included as completed work.** A real issue, branch, code change and PR must be created in GitHub. See `ISSUE-AND-PR.md`. Link those in your final submission after they exist.

## Image credits / rights
- Homepage black Shelby: [Calreyn88, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ford_Mustang_Shelby_GT500_black.jpg), CC BY-SA 4.0.
- Showroom Shelby front: [Syntaxlord / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2020_Ford_Mustang_Shelby_GT500_Coupe,_Cleveland_Auto_Show.jpg), listed by project as CC BY-SA 4.0.
- Showroom Shelby rear: [Syntaxlord / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2020_Ford_Mustang_Shelby_GT500_Coupe,_Cleveland_Auto_Show_(Rear).jpg), listed by project as CC BY-SA 4.0.
- Nissan GT-R: [Tokumeigakarinoaoshima / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nissan_GT-R_(CBA-R35)_front.jpg), CC0.
- Toyota GR Supra: [Chanokchon / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2020_Toyota_GR_Supra_2020_Edition.jpg), CC BY-SA 4.0.
The site links per-photo credits. Verify the license on each original file page before public release or reuse outside class.

## Submission checklist
- [ ] Source ZIP (included with this package)
- [ ] README (this file)
- [ ] At least five **browser** tests performed and recorded, with failure/edge case
- [ ] Actual GitHub issue and PR URLs/screenshots showing tracked work and review
- [ ] Before and after screenshots saved in `evidence/`
- [ ] AI Use Note reviewed and student-specific edits entered
- [ ] Five-minute demonstration rehearsed
- [ ] Instructor can access repo/files and evidence
