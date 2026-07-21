# Fixed Clay Tail Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Keep the clay tail fixed and curved while giving text consistent
padding for every phrase length.

**Architecture:** Separate the scalable body texture from a fixed-size tail
asset. Compose both with pseudo-elements behind the existing Angular content,
using a fixed tail slot inside the outer bubble box.

**Tech Stack:** Angular 22, SCSS, SVG, browser CDP

---

### Task 1: Separate the SVG assets

**Files:**
- Modify: `src/app/clay-bubble.svg`
- Create: `src/app/clay-bubble-tail.svg`

1. Convert the existing SVG to a body-only clay texture.
2. Create a fixed-viewBox tail with a rounded Bézier silhouette.
3. Match the body and tail palette, grain, highlight, and shade.

### Task 2: Compose fixed layers

**Files:**
- Modify: `src/app/app.scss`

1. Give the bubble a stable responsive width.
2. Reserve a fixed tail slot separately from text padding.
3. Render the body and tail with layered pseudo-elements.
4. Keep the body above the tail overlap to hide the join.

### Task 3: Verify

1. Compare a short phrase and the longest phrase on desktop.
2. Repeat at 480 px and 375 px.
3. Measure tail dimensions, text/body padding, and horizontal overflow.
4. Run `npm run build` and lint diagnostics.
