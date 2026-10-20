# AI 101 Midterm Project Prototype: Alhanouf Studio
**Student:** Alhanouf Turki Gazzaz  
**Institution:** Alvernia University (AI 101)  
**Submission Date:** October 2026  
**Audience:** Independent Digital Illustrators & Commission Clients seeking curated character artwork and color exploration.  
**Need Stated:** Digital artists need a focused platform to showcase original hand-drawn sketches and stylized portraits while exploring AI-harmonized color palettes without misrepresenting generated derivatives as manual linework.

---

## 1. Working Prototype Features
1. **Interactive Category Filtering & Dynamic Search:** Real-time filtering across 'Sketches', 'Portraits', and 'AI-Assisted Colorways', combined with a live substring search across title, description, and hashtags.
2. **Detailed Artwork Modal Inspector:** Accessible modal dialog showing complete metadata, medium specifications, tool details, and strict AI disclosure labeling for every piece.
3. **AI Color Palette Harmonizer (Pull Request Improvement):** Interactive utility allowing artists to select visual moods (Warm Dusk, Cyberpunk Twilight, Earthy Olive, Monochrome) and generate complementary swatches with exact HEX codes for digital brushwork.

---

## 2. Issue and Pull Request (PR) Documentation
* **GitHub Issue #1:** *"Add accessible color palette harmonizer and search debounce to prevent UI stutter."*
  - **Identified Gap:** The original baseline gallery only displayed static portfolio cards with no utility for illustrators planning upcoming character color keys.
* **Pull Request #2:** *"Feature: Implement interactive mood palette generator and dynamic empty-state feedback."*
  - **Reviewed Change:** Implemented `palettePresets` data structures, added interactive swatch DOM injection, and styled modal focus-trapping.
  - **Traceable Revision:** Merged into `main` branch after verifying cross-browser compatibility and accessible color contrast.

---

## 3. How to Run the Project
1. Unzip the project files (`index.html`, `style.css`, `app.js`).
2. Double-click `index.html` to open it directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
3. Alternatively, launch a local web server:
   ```bash
   python3 -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

---

## 4. Known Limitations
- The current palette generator provides four calibrated aesthetic sets rather than infinite unbounded procedural generation via dynamic WebGL shaders.
- Artwork thumbnails utilize stylized SVG/canvas gradients as demonstrative placeholders for full high-resolution PSD/TIFF canvas renders to preserve fast client loading times.
