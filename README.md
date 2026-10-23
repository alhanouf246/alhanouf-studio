# Alhanouf Studio — Creative Digital Art & AI Palette Harmonizer

**Live Site:** [https://alhanouf246.github.io/alhanouf-studio/](https://alhanouf246.github.io/alhanouf-studio/)  
**GitHub Repository:** [https://github.com/alhanouf246/alhanouf-studio](https://github.com/alhanouf246/alhanouf-studio)  
**Student:** Alhanouf Turki Gazzaz  
**Course:** AI 101 · Midterm Project  
**Institution:** Alvernia University  

---

## 1. Audience and Purpose
* **Target Audience:** Independent digital illustrators, character concept artists, and art commission clients.
* **Stated Purpose:** To provide a focused, ethical portfolio platform that showcases original hand-drawn sketches and stylized portraits while allowing artists to explore AI-harmonized color palettes for character rendering without misrepresenting generated derivatives as manual linework.

---

## 2. Two Core Working Features
1. **Interactive Categorization, Real-Time Search & Modal Inspector:**
   - Real-time client-side filtering across categories (`All`, `Sketches`, `Portraits`, `AI-Assisted Colorway`).
   - Live search input matching keywords across title, description, and hashtags.
   - Accessible modal inspector displaying complete artwork metadata, medium, creation date, and an explicit AI transparency disclosure.
2. **Interactive AI Palette Inspector & Harmony Generator (Interaction Feature):**
   - Artists select an aesthetic mood (`Warm Dusk`, `Cyberpunk Twilight`, `Earthy Olive`, `Graphite Classic`).
   - Generates four complementary color swatches dynamically with readable HEX codes.
   - Clicking any swatch instantly copies the HEX code to the system clipboard with an animated confirmation message.

---

## 3. How to Use the App
1. Open the live site: [https://alhanouf246.github.io/alhanouf-studio/](https://alhanouf246.github.io/alhanouf-studio/).
2. **Filter & Search:**
   - Click any category button at the top to filter the gallery cards.
   - Type in the search bar (e.g., `cyberpunk`, `sketch`, or `portrait`) to isolate specific artworks.
3. **Inspect Artwork:**
   - Click on any artwork card or hit `Enter` when focused to launch the detailed modal inspector.
   - Press `Escape` or click the close button (`×`) to return to the gallery.
4. **Generate Color Harmonies:**
   - Scroll down to the **Interactive Studio Feature**.
   - Select a mood from the dropdown menu and click **Generate Harmony**.
   - Click any color swatch to copy its HEX value directly into your digital painting software (Photoshop, Procreate, Clip Studio Paint).

---

## 4. Sources and Credits
* Custom sample artwork data and character descriptions curated by Alhanouf Turki Gazzaz.
* Color harmony algorithms and aesthetic palette presets derived from color theory principles for digital concept art.
* Typography: System-native clean font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto).
* Synthetic demo data and palette schemas developed with assistance from Google Gemini 3 Flash.

---

## 5. Known Limitations
* The palette harmonizer offers four curated harmonious palette themes rather than unbounded procedural generation via dynamic WebGL shaders.
* Gallery artworks use stylized inline vectors and gradient canvas representations to maintain zero external network dependencies and immediate loading speeds across mobile devices.
* Very rapid keystrokes in the search bar filter synchronously without a debounce delay; on massive collections (>500 items), this could introduce minor interface latency.
