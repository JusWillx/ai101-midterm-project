# Test Log — VRT Garage Stage 2.2

Test date for source checks: **2026-10-22**. Environment: project files in a local container; Node.js source syntax check and Python source inspection. Browser navigation was blocked in this environment. These source checks **do not demonstrate UI behavior**.

## A. Executed source checks (actual results)

| ID | Test | Actual observed outcome | Result |
|---|---|---|---|
| S1 | JavaScript parses without a syntax error | Condition met in current source | PASS |
| S2 | Three vehicle selector buttons are present | Condition met in current source | PASS |
| S3 | Three vehicle datasets are defined | Condition met in current source | PASS |
| S4 | Shelby gallery has front and rear entries | Condition met in current source | PASS |
| S5 | Photo gallery controls have matching HTML and JS hooks | Condition met in current source | PASS |
| S6 | Image-loading fallback is implemented | Condition met in current source | PASS |
| S7 | Local CSS and JavaScript references resolve | Condition met in current source | PASS |
| S8 | Navigation has documented section targets | Condition met in current source | PASS |

## B. Required manual browser tests — do these and fill in observations

Use Chrome/Edge with Live Server. For each, note **date, browser, actual output, pass/fail, and screenshot filename**. An unchecked result is not a pass.

| ID | Steps | Expected | Actual observation | Result | Screenshot |
|---|---|---|---|---|---|
| B1 | Open site; click **Showroom** | Scroll to showroom | [enter] | NOT RUN | [file] |
| B2 | Choose Nissan GT-R, then Supra | Name, category, image and credit update | [enter] | NOT RUN | [file] |
| B3 | Select Shelby, click Next | Image counter moves from 1/2 to 2/2; rear photo appears | [enter] | NOT RUN | [file] |
| B4 | Click front thumbnail then rear thumbnail | Appropriate photo and active thumbnail update | [enter] | NOT RUN | [file] |
| B5 | Select GT-R/Supra then Shelby | Single-photo cars hide gallery arrows; Shelby returns to 1/2 | [enter] | NOT RUN | [file] |
| B6 | On a phone-sized browser window, open navigation | Menu opens; section link navigates and closes menu | [enter] | NOT RUN | [file] |
| B7 — edge | In browser DevTools Network, choose Offline; switch photo | A clear image-not-available fallback appears, no fatal crash | [enter] | NOT RUN | [file] |

**Suggested DevTools steps for B7:** F12 → Network tab → throttling → Offline → choose a *different, not-yet-cached* photo. Disable cache if needed. Turn Online back on afterward. If the expected failure doesn't occur due to caching, state that honestly and document the limitation you investigated.

### Previously reported user check (separate from this test session)
During Stage 2, the student stated that switching among the three cars changed their pictures and descriptions correctly. This is a user-reported result; no screenshot was supplied, and the later gallery version needs retesting.

### Evidence preservation
Save captures in `evidence/`, e.g., `showroom-selected-shelby.png`, `showroom-rear.png`, `gtr-single-photo.png`, `offline-fallback.png`. Screenshots are not present in the supplied ZIP unless you add them yourself.
