# GitHub Issue and Pull Request — required midterm evidence

**Status: NOT YET CREATED.** This document is a ready-to-use guide, not proof that a GitHub issue, review, or PR exists.

## 1. Put this project on GitHub
Create an empty GitHub repository called `vrt-garage`, then upload the project files, or use VS Code's Source Control → Publish to GitHub. Keep the repo public or give your professor access. Commit this current Stage 2.2 version as your baseline before making the next change.

## 2. Create an Issue (copy and paste)
**Title:** Improve Shelby gallery navigation clarity

**Problem:** Visitors need clearer feedback about which Shelby image is being displayed.

**Acceptance criteria:**
- [ ] A live-view label near the photo displays “Front view” or “Rear view”.
- [ ] The label updates correctly when arrows or thumbnails are used.
- [ ] A gallery button works with keyboard focus and has a visible focus outline.
- [ ] A short test records before/after behavior.
- [ ] Existing GT-R and Supra single-image behavior remains unchanged.

**Why it matters:** This directly improves user understanding of the working prototype without expanding scope into AI image editing.

Create this issue **before changing code**, and copy its real URL below.

**Issue URL:** [paste URL after creation]

## 3. Implement a small tracked change
In a new branch, e.g. `issue-1-gallery-accessibility`, adjust gallery labels or focus styling to satisfy the criteria, test, then commit the changes. Some related behavior may exist already; document a **genuine new improvement** (for example a text label specifically added for keyboard users, and a new test), not a fake change.

Example Git commands from inside the project folder:
```bash
git checkout -b issue-1-gallery-accessibility
# make a real small code change and test it
git add index.html style.css script.js TEST-LOG.md
git commit -m "Improve showroom gallery accessibility"
git push -u origin issue-1-gallery-accessibility
```

## 4. Open a Pull Request
**Suggested title:** Improve Shelby gallery navigation clarity

**Suggested description:**
> Closes #[paste actual issue number]. This change improves how the featured Shelby front/rear photos are identified and navigated. I checked the three vehicle selectors and the arrows/thumbnails after the change. See screenshots and the test log for actual results.

Include actual changed-file list, test results, screenshots, and a before/after explanation. Use GitHub **Files changed** to review the diff. If a classmate or instructor reviews it, document their feedback; if self-review is permitted, explain the review you personally performed and what you changed. Do not claim an outside reviewer approved it unless one actually did. Merge only after testing and any required review.

**PR URL:** [paste URL after creation]  
**Reviewer or documented self-review:** [fill in honestly]  
**Commit/change summary:** [fill in]  
**Before screenshot:** [file name]  
**After screenshot:** [file name]

## 5. What to submit
Actual GitHub issue URL + PR URL + screenshots of issue criteria, PR files-changed/review/merge state, and a short explanation of the traced change. This document alone **does not fulfill** the rubric's issue/PR requirement.
