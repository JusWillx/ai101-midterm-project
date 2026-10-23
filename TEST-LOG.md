# VRT Garage — Midterm Test Log

## Testing context
The student confirmed that the following five tests were personally performed and all passed, using the VRT Garage website in a browser. The exact test date, browser version and screenshot filenames have not yet been provided. Results are student-reported, not independently reproduced by ChatGPT.

## Five completed browser tests

| ID | Test steps | Expected outcome | Actual outcome reported | Status |
|---|---|---|---|---|
| B1 | Select Shelby GT500 and click **Next Photo** | Show the next image | Next Shelby photo displayed | PASS — student reported |
| B2 | Click **Previous Photo** | Return to previous image | Previous Shelby photo displayed | PASS — student reported |
| B3 | Click the left and right overlay arrows | Cycle through Shelby images | Both navigation arrows worked | PASS — student reported |
| B4 | Choose Nissan GT-R, then Toyota Supra | Display each car's image | Both selected cars displayed their respective images | PASS — student reported |
| B5 | Switch from other vehicles back to the Shelby | Gallery resets to photo 1 | Shelby gallery returned to the first picture | PASS — student reported |

## Edge case and known limitation
The gallery loads vehicle photos from Wikimedia Commons over the internet. If the connection is unavailable or a remote photo fails to load, the image can fail to display. The code includes an image-unavailable fallback. This is a **documented limitation identified through source review**, not a completed offline test. To strengthen evaluation evidence, test with browser Developer Tools → Network → Offline, select an uncached image and record the observed result. Do not call this test passed unless it is actually performed.

## Source and development review
The gallery navigation change was tracked through [Issue #1](https://github.com/JusWillx/ai101-midterm-project/issues/1) and [Pull Request #2](https://github.com/JusWillx/ai101-midterm-project/pull/2). An initial change inadvertently removed existing event listeners; the error was identified in code review and the student corrected it before merging the PR.

## Supporting evidence still to attach
- Before screenshot: original gallery without labeled Next Photo control.
- After screenshot: working gallery with Next Photo control.
- Screenshot: merged GitHub pull request.
- Record the actual test date, browser, and screenshots when available.
