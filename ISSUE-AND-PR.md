# Development Evidence — VRT Garage

## Issue #1 — Closed
[Improve Shelby GT500 Gallery Navigation](https://github.com/JusWillx/ai101-midterm-project/issues/1)

**Problem:** The Shelby gallery included an existing Previous Photo button but lacked a matching labeled Next Photo button.

**Acceptance criteria:** Add Next Photo; preserve both labeled controls and overlay arrows; maintain the photo counter and existing single-photo behavior.

## Pull Request #2 — Merged
[Improve Shelby GT500 Gallery Navigation](https://github.com/JusWillx/ai101-midterm-project/pull/2)

**Branch:** `feature/gallery-next-button` → `main`

**Changes:** Added a labeled button in `index.html`, and connected it in `script.js`.

**Review finding and correction:** The initial edit unintentionally removed the overlay Next arrow listener and labeled Previous Photo listener. Review caught the error. Both listeners were restored, leaving all four gallery controls connected before merging.

**Testing:** The student reported passing five browser checks. See `TEST-LOG.md` for details. An independent external reviewer was not reported; do not imply an outside approval.

## Evidence to attach
- `evidence/No Next Button.png` — previous gallery, without Next Photo text control.
- `evidence/Next Button.png` — updated gallery with both labeled controls.
- `evidence/Merged Pull request.png` — screenshot of PR #2 showing merged status.

If screenshots use different filenames, update these paths to match the uploaded files.
