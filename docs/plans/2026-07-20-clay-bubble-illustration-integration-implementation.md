# Clay Bubble Illustration Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Make the responsive speech bubble visually match the warm, textured
clay illustration.

**Architecture:** Retain the existing Angular markup and behavior. Refine the
single body-and-tail SVG for material depth and use component SCSS to tune
responsive sizing and placement.

**Tech Stack:** Angular 22, SCSS, SVG, browser CDP

---

### Task 1: Model the SVG as warm ivory clay

**Files:**
- Modify: `src/app/clay-bubble.svg`

1. Warm the base gradient to ivory and peach clay tones.
2. Add low-opacity procedural grain and displacement for handmade variation.
3. Add directional highlight and lower-right shade matching the portrait.
4. Keep the body and tail as one path and shift the tail leftward.

### Task 2: Tune responsive bubble proportions

**Files:**
- Modify: `src/app/app.scss`

1. Increase the desktop maximum width to reduce excessive text wrapping.
2. Balance body and tail padding at desktop and mobile widths.
3. Adjust position only as required to keep the tail aimed at the raised finger.

### Task 3: Browser verification

1. Capture desktop, 481 px, 480 px, and 375 px screenshots.
2. Measure bubble/text bounds and page-level horizontal overflow.
3. Make one-variable visual refinements if measurements or screenshots fail.
4. Run `npm run build`.
5. Check lint diagnostics for `src/app/app.scss`.
