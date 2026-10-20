# Five-Minute Live Demonstration Script (AI 101 Midterm)
**Duration:** 5 Minutes + Q&A  
**Student:** Alhanouf Turki Gazzaz  

---

### Minute 1: Audience & Stated Need (Criterion 1)
- "Good morning/afternoon. My midterm prototype is titled **Alhanouf Studio**, an interactive portfolio and color study platform."
- "The target audience is **independent digital illustrators, character concept artists, and commission clients**."
- "The core problem it addresses: Digital illustrators need a clean space to showcase manual linework and portraits while exploring AI-assisted color harmonies—without deceptive claims about how the artwork was made."

### Minute 2: Demonstration of Core Working Features (Criterion 2)
- *Action:* Open `index.html` in the browser.
- "Feature 1 is our dynamic categorization and live substring filter. If I click 'Sketches', we instantly see gesture studies. If I click 'Portraits', the view updates smoothly. Typing in the search bar filters titles and tags in real time."
- "Feature 2 is the Detailed Modal Inspector. Clicking any artwork brings up full metadata, medium specifications, and explicit AI disclosure."

### Minute 3: The AI-Assisted Improvement & PR Process (Criterion 3)
- "To fulfill the Issue and PR requirement, I identified Issue #1: the need for an active studio tool. In Pull Request #2, I collaborated with AI to build the **AI Palette Inspector**."
- *Action:* Select 'Cyberpunk Twilight' and click 'Generate Harmony'.
- "The tool calculates harmonious color swatches with exact HEX values for digital painting. I reviewed the AI's generated code, refined the color contrast for accessibility, and ensured the swatches render cleanly on mobile."

### Minute 4: Testing Evidence & Failure/Edge Case (Criterion 4)
- *Action:* Type `xyzinvalid` into the search box.
- "In my test plan (`Test_Log.csv`), I completed six structured checks. Here is the edge-case test: typing a non-existent term displays a helpful empty-state banner rather than a silent UI crash."
- "I also tested keyboard accessibility: hitting `Escape` cleanly dismisses the modal dialog."

### Minute 5: AI Disclosure, Decisions & Known Limitations (Criterion 5)
- "In my AI Use Note, I disclosed using Google Gemini for code scaffolding and test case structuring."
- "A key decision was rejecting the AI's initial proposal to use an unmetered live image generation API, ensuring the prototype runs reliably offline for this presentation."
- "One known limitation is that the palette generator currently relies on pre-calibrated harmony sets rather than dynamic procedural shaders. Thank you, and I am ready for questions."
