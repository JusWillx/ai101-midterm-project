# AI Use Note — VRT Garage

**Tool:** ChatGPT (OpenAI conversational AI). **Use type:** Development assistance, not a live API feature.

## Purpose
I used AI to brainstorm a professional car-customization website, narrow the first version to a feasible prototype, draft and revise HTML/CSS/JavaScript, plan gallery behavior and draft documentation and tests. The resulting prototype is not AI-powered at runtime.

## Representative real prompts from project development
- “Let's build Stage 1 of VRT Garage. Give me the complete index.html, style.css, and script.js code for the professional homepage we planned, featuring the black Shelby GT500-style Mustang, with step-by-step VS Code instructions.”
- “Let's start Stage 2 of VRT Garage and build the interactive car showroom. Keep my existing Stage 1 website design, update the necessary code files, explain the code changes, and help me prepare the project for the midterm rubric.”
- “actually before i do that could you make cars have more than one picture so they can have a better view of each car? like when dealerships post their cars online”
- “its functioing but i dont like how they arre all different pictures can you try and make it to where its the same car just in different angles”
- “i think this is a good point for my prototype section now i need you to complete the other things for the rubric i gave so i can hand in”

## AI-created contributions
- Project layout, responsive styling, navigation behaviors, three-vehicle JavaScript dataset, Shelby photo navigation and image fallback.
- First-draft README, issue/PR checklist, evaluation scripts, and demo outline.

## My decisions / revisions (student: review and personalize)
- Chose the name **VRT Garage** and selected a black Shelby-style Mustang as the homepage feature.
- Requested the three-vehicle interactive showroom.
- Requested dealership-style views, then identified the mismatch between images of different cars.
- Chose a simpler prototype: two front/rear Shelby display photos, and one photo per GT-R and Supra.
- **Add anything you personally changed in the code here:** [describe file, change, and reason or write “No direct code edits; I reviewed and tested AI-generated code.”]

## Verification / evidence
- I previously reported that the three-car showroom correctly changed images and descriptions when tested locally.
- Automated **source-level** checks are recorded in `TEST-LOG.md`; they do not replace browser testing.
- **Before submission, add actual browser-test dates and screenshots** in `TEST-LOG.md` and `evidence/`; don't report unperformed checks as passed.
- **Before submission, add your actual GitHub issue/PR links** in `ISSUE-AND-PR.md`.

## Limitations of AI assistance
AI code can have logical errors or depend on unstable third-party images. AI-generated words about copyrights, vehicle identity, or functionality require checking. This project cannot edit uploaded car photos, visualize real-world mods, or validate parts compatibility, and it does not use an AI image-editing API. I am responsible for checking, understanding, testing, and accurately presenting the result.
