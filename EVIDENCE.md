# EVIDENCE.md — Project Overview, Revision Evidence & Problem Solved

**Student Name:** Alhanouf Turki Gazzaz  
**Institution:** Alvernia University (AI 101)  
**Submission Date:** October 26, 2026  
**Audience:** Independent Digital Illustrators, Concept Artists, and Commission Clients  
**Purpose:** Provide an ethical portfolio and studio workspace that showcases original digital artwork alongside transparently labeled AI-assisted color exploration tools.  

---

## 1. Summary of Working Features
1. **Dynamic Gallery Filter & Real-Time Search:**
   - Instant filtering across `Sketches`, `Portraits`, and `AI-Assisted Colorway`.
   - Dynamic real-time substring search across title, description, and tags.
   - Detailed modal inspector displaying full medium specifications and explicit AI disclosures.
2. **Interactive AI Palette Harmonizer & Clipboard Integration:**
   - Mood selector dropdown generating 4-swatch harmonized color palettes with exact HEX codes.
   - Interactive one-click clipboard copying with visual toast feedback.

---

## 2. Documented Before & After Revision Evidence

### Baseline Version (Before Revision):
* **State:** The initial prototype only displayed static cards in a grid.
* **Limitations:** Users could only look at pictures passively. There was no studio utility for practicing artists, and typing a non-existent search term resulted in a blank, broken-looking screen with no guidance.

### Enhanced Version (After Follow-Up Revision):
* **Added Feature:** Integrated the interactive **AI Palette Inspector & Harmony Generator** section directly below the gallery.
* **Edge-Case Handling:** Added an empty-state alert (`#emptyMessage`) that gracefully guides users when no search results match.
* **Interactive Utility:** Added one-click clipboard copying for all generated HEX swatches.
* **Visual Evidence:** Screen recordings and visual screenshots are indexed in the `evidence/` folder:
  - `evidence/before_static_gallery.png`
  - `evidence/after_palette_feature.png`
  - `evidence/live_mobile_test.png`

---

## 3. One Technical Problem Solved
* **The Problem:** When implementing the clipboard copy interaction on mobile browsers (Safari iOS), calling `navigator.clipboard.writeText()` inside asynchronous UI transitions occasionally threw a `NotAllowedError` permission denial because the touch event lost its direct user-gesture activation context.
* **The Solution:** Refactored the click event listener on swatches to directly execute the clipboard write synchronously within the primary tap event handler, complemented by an accessible fallback text selection fallback for older browser engines.
* **Outcome:** Swatch copying works seamlessly across both desktop browsers and mobile touchscreens with immediate visual confirmation feedback.
