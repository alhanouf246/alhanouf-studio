# TEST_LOG.md — Live GitHub Pages Verification

**Test Platform:** Live GitHub Pages Site ([https://alhanouf246.github.io/alhanouf-studio/](https://alhanouf246.github.io/alhanouf-studio/))  
**Tested on Devices:** Windows PC (Chrome 122), iPhone Safari (iOS 17 Incognito), Responsive Developer Tools  
**Tester:** Alhanouf Turki Gazzaz  

---

## Five Mandatory Live Tests

### Test 1: Normal Input & Filtering
* **Test Action / Steps:**
  1. Navigate to the live URL.
  2. Click the `Sketches` filter button.
* **Expected Result:** Gallery filters down strictly to items tagged with the `sketch` category, showing only 2 items with yellow badges.
* **Actual Result:** Gallery immediately rendered exactly 2 items: "Anatomy & Gesture Study 04" and "Mechanical Wing Concept".
* **Pass / Fail:** **PASS**
* **Verification Note:** Verified on live GitHub Pages in Chrome.

---

### Test 2: Empty / Invalid Input (Edge Case)
* **Test Action / Steps:**
  1. Click into the search bar.
  2. Type an arbitrary, non-matching string: `xyz123nonsense`.
* **Expected Result:** All artwork cards vanish; a clear fallback message (`#emptyMessage`) displays stating "No artwork matching the selected filter or search term."
* **Actual Result:** Cards disappeared instantly, and the styled empty-state message appeared with no console errors or layout collapse.
* **Pass / Fail:** **PASS**
* **Verification Note:** Prevents confusing blank screen states.

---

### Test 3: Repeated Use (Rapid Interaction)
* **Test Action / Steps:**
  1. Rapidly toggle between `Warm Dusk`, `Cyberpunk Twilight`, and `Earthy Olive` in the mood selector dropdown.
  2. Click **Generate Harmony** 10 times consecutively in rapid succession.
  3. Rapidly click each generated swatch.
* **Expected Result:** DOM clears previous swatches cleanly and replaces them with new elements; no memory leaks, duplicate swatch rows, or unhandled promise rejections.
* **Actual Result:** Swatch container cleanly refreshed on every single click; clipboard copy feedback message updated dynamically without lag.
* **Pass / Fail:** **PASS**
* **Verification Note:** Validated DOM stability under repetitive user interactions.

---

### Test 4: Keyboard Access & Accessibility
* **Test Action / Steps:**
  1. Press `Tab` repeatedly to navigate through the interactive interface without a mouse.
  2. Focus on the first artwork card ("Nocturne Wanderer") and press `Enter`.
  3. When modal opens, press the `Escape` key (`Esc`).
* **Expected Result:** Card has a visible focus outline; pressing `Enter` opens the modal dialog; pressing `Escape` cleanly closes the modal and returns focus.
* **Actual Result:** Modal opened immediately with full descriptive metadata upon pressing `Enter`; pressing `Escape` dismissed the modal overlay completely.
* **Pass / Fail:** **PASS**
* **Verification Note:** Meets WCAG 2.1 keyboard navigation standards.

---

### Test 5: Narrow-Screen / Mobile Check
* **Test Action / Steps:**
  1. Open Chrome DevTools and toggle mobile device emulation to iPhone 14 Pro (393px width).
  2. Open the live site on an actual mobile browser in a private incognito window.
* **Expected Result:** Header collapses cleanly; search input and category filter buttons wrap without overflowing the viewport horizontally; palette swatches stack into a readable grid.
* **Actual Result:** Grid adapted to a single-column layout; filter buttons wrapped onto two neat lines with 8px touch spacing; no horizontal scrolling occurred.
* **Pass / Fail:** **PASS**
* **Verification Note:** Verified viewport meta tag is set correctly (`width=device-width, initial-scale=1.0`).

---

## Recorded Problem, Fix, and Retest

* **Identified Defect:** During preliminary testing of the modal dialog on narrow mobile screens (<400px), long descriptions pushed the modal footer off-screen, and clicking outside on touch devices occasionally failed to dismiss the modal due to touch event bubbling.
* **Code Fix Applied:** 
  - Added `max-height: 90vh` and `overflow-y: auto` to `.modal-content` in `style.css`.
  - Added `pointer-events` handling and bound both `click` and `touchend` events with proper propagation stops.
* **Retest Result:** Retested on iPhone Safari mobile view. The modal now scrolls gracefully within the viewport, and tapping the background overlay dismisses it instantly without sticking.
* **Status:** **PASS (Resolved & Verified)**
