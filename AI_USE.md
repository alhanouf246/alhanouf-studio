# AI_USE.md — AI Tool Disclosure & Prompt Audit

**Course:** AI 101 · Midterm Project  
**Student:** Alhanouf Turki Gazzaz  
**Primary AI Model Used:** Google Gemini 3 Flash (Large Language Model)  
**Verification Date:** October 2026  

---

## 1. Tool Identification and Purpose
* **Tool Name:** Google Gemini 3 Flash
* **Purpose:** Architecture ideation, semantic HTML5/CSS3 scaffolding, JavaScript data filtering logic, WCAG accessibility validation, and test scenario formulation.

---

## 2. Exact Initial Prompt & Output Analysis
### Initial Prompt Submitted:
> *"I am an undergraduate student in AI 101 designing a creative portfolio prototype for independent digital illustrators and character concept artists. I need a responsive single-page web app with two working features: category filtering for sketches, portraits, and AI-assisted artworks, and a modal inspector that shows full metadata and AI disclosures. Give me clean HTML, CSS, and JavaScript with accessible controls."*

### Initial AI Contribution:
* Provided an initial single-page layout featuring a CSS grid of cards and basic JavaScript filtering using an array of artwork objects.
* Provided a simple popup modal that grabbed data attributes from clicked cards.

---

## 3. Exact Follow-Up Prompt (Meaningful Improvement)
### Follow-Up Prompt Submitted:
> *"The current prototype is too passive because it only displays static cards. Let's make a meaningful improvement to fulfill my midterm rubric: add an interactive studio utility called the 'AI Palette Inspector & Harmony Generator'. Users should select an artistic mood from a dropdown (Warm Dusk, Cyberpunk Twilight, Earthy Olive, Monochrome), dynamically inject 4 color swatches with exact HEX values, and let users click any swatch to copy the HEX code to their clipboard. Also, add keyboard navigation (Enter/Escape) and handle the edge case where searching produces 0 results."*

### AI Contribution to Follow-Up:
* Structured the `palettePresets` dictionary with four calibrated 4-color palettes and WCAG-compliant contrasting text labels.
* Generated DOM injection logic using `document.createElement('div')` and the `navigator.clipboard.writeText()` API.
* Added keyboard event listeners (`keydown` for `Enter` and `Escape`) and the `#emptyMessage` visibility toggle.

---

## 4. Student Modifications & Review Decisions
* **Accepted:** The modular data structure for artworks and presets, responsive CSS flexbox/grid layout, and keyboard event bindings.
* **Rejected & Changed:**
  1. *Live API Rejection:* The AI originally suggested integrating a live external API to generate images dynamically. I deliberately rejected this to avoid rate-limit failures, token costs, and network latency during live evaluation, choosing deterministic, robust client-side algorithms instead.
  2. *Color Contrast Calibration:* The initial text color suggested for the "Solar Amber" and "Electric Cyan" swatches had insufficient contrast against white text. I revised the text color mapping to `#000` (black) to satisfy WCAG AA contrast standards.
  3. *AI Transparency Schema:* Rewrote every metadata disclosure note to clearly differentiate between pure hand-drawn digital work, gesture studies, and AI-assisted color harmonies.

---

## 5. Verification & Investigated Limitations
* **Verification:** Every line of generated JavaScript was audited against browser developer console outputs. All five tests in `TEST_LOG.md` were executed directly on the live deployed GitHub Pages domain.
* **Investigated Limitation:** Investigated search bar performance. While instantaneous on 6 sample items, typing with unthrottled event listeners across hundreds of items could cause DOM reflow stutter. A 250ms debounce function was documented as the next architectural enhancement.
