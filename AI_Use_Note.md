# AI Use Note & Disclosure Statement
**Course:** AI 101 Midterm Project · Alvernia University  
**Student:** Alhanouf Turki Gazzaz  

---

### 1. Tool Identification
- **Primary Tool:** Google Gemini 3 Flash / Large Language Model
- **Purpose:** Brainstorming architecture, scaffold code generation (HTML/CSS/JS), refining accessibility standards, and structuring rigorous test cases.

---

### 2. Representative Prompts
1. *Prompt 1 (Planning):*  
   > "I am designing a creative portfolio prototype for digital illustrators and commission clients. I need 2-3 interactive features that showcase original sketches and portraits while transparently labeling AI colorway experiments. Give me a minimalist, responsive layout architecture."
2. *Prompt 2 (Coding & PR):*  
   > "Write a modular JavaScript function to generate harmonious color palette swatches based on user-selected moods (warm, cool, earth, monochrome) with exact HEX codes for digital painting."
3. *Prompt 3 (Testing & Debugging):*  
   > "Design 5-6 structured test cases including an edge case for an empty search query and modal keyboard accessibility (Esc/Enter key bindings)."

---

### 3. Student Review, Changes, and Refinements
- **Accepted:** The AI's suggested structure for the responsive CSS grid and the data-driven array architecture for portfolio cards.
- **Rejected & Modified:** The AI initially proposed integrating an external live AI image generation API call. I rejected this to avoid external API dependency failures, unmetered token latency, and rate limits during the 5-minute live classroom demonstration. Instead, I opted for deterministic, client-side aesthetic palette generation and transparently labeled local media cards.
- **Custom Enhancements:** Hand-tuned color contrast ratios to meet WCAG AA standards and wrote explicit AI transparency disclosure tags on every card.

---

### 4. Verification & Limitations
- **Verification:** Manually executed all 6 test cases documented in `Test_Log.csv`. Verified keyboard navigation (tabbing, Enter, Escape) and responsive resizing on mobile viewports.
- **Investigated Limitation:** Investigated search input lag. On large datasets, rapid typing causes unnecessary re-renders. A future iteration will introduce a 250ms debounce function to optimize frame rendering performance.
