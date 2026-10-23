# AI Use Note — VRT Garage

**AI tool:** ChatGPT (OpenAI). **Role:** AI-assisted development, not a live AI feature in the running website.

## Purpose and contribution
I used ChatGPT to brainstorm the concept, plan a manageable first version, develop the HTML, CSS, and JavaScript, organize a three-car showroom, improve the Shelby photo gallery, and prepare README and testing materials.

## Representative prompts from my work
- “Let's build Stage 1 of VRT Garage. Give me the complete index.html, style.css, and script.js code for the professional homepage we planned, featuring the black Shelby GT500-style Mustang, with step-by-step VS Code instructions.”
- “Let's start Stage 2 of VRT Garage and build the interactive car showroom. Keep my existing Stage 1 website design, update the necessary code files, explain the code changes, and help me prepare the project for the midterm rubric.”
- “actually before i do that could you make cars have more than one picture so they can have a better view of each car? like when dealerships post their cars online”
- “its functioing but i dont like how they arre all different pictures can you try and make it to where its the same car just in different angles”

## My decisions, revisions, and review
I chose the name VRT Garage and selected a black Shelby Mustang theme. I wanted both a dream-car configurator and an upload-your-own-car option in the long term, but kept this prototype focused on browsing three vehicles and a small matched Shelby gallery. After seeing mismatched photos of the same models, I requested that the prototype use two Shelby views from one display and one image for each of the other two cars.

For [Issue #1](https://github.com/JusWillx/ai101-midterm-project/issues/1), I created a branch and [Pull Request #2](https://github.com/JusWillx/ai101-midterm-project/pull/2) to add the labeled Next Photo button. Code review identified that two existing JavaScript gallery event listeners had accidentally been removed. I restored the four gallery navigation listeners in `script.js`, committed that fix, and merged the pull request after testing.

## Verification
I opened the website in my browser and reported five passing tests: Next Photo, Previous Photo, overlay arrows, changing between GT-R and Supra, and returning to Shelby with the gallery reset. These results are recorded in `TEST-LOG.md`. My exact browser version and test date were not recorded in the conversation; I should add those when available. Screenshots should be attached in the repository `evidence/` folder.

## Limitations and responsibility
AI-assisted code still needed review and correction, as shown by the gallery listener regression. Remote vehicle photos need an internet connection and might fail to load. The prototype does not generate modifications, upload personal car photos, save builds, or use a live AI API. The offline image-failure case has been identified as a limitation, not reported as a completed browser test. I remain responsible for explaining and checking the work.
