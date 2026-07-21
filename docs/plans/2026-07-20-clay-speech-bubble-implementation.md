# Clay Speech Bubble Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Restyle the existing speech bubble as subtle handmade clay.

**Architecture:** Keep the existing Angular markup and behavior unchanged.
Implement the visual treatment entirely in component SCSS using layered
gradients, organic radii, and inset/outer shadows shared by the bubble and tail.

**Tech Stack:** Angular 22, HTML, SCSS

---

### Task 1: Restyle the bubble surface

**Files:**
- Modify: `src/app/app.scss`

1. Replace the flat bubble background with layered radial and linear gradients.
2. Use slightly asymmetric corner radii for an organic clay silhouette.
3. Add inset highlights and shadows plus a soft cast shadow.

### Task 2: Integrate the clay tail

**Files:**
- Modify: `src/app/app.scss`

1. Replace the border triangle with a rotated, rounded clay shape.
2. Reuse the bubble palette and shadows so the tail appears attached.
3. Preserve the existing desktop and mobile aiming positions.

### Task 3: Verify

1. Run `npm run build`.
2. Check `src/app/app.scss` for lint diagnostics.
3. Confirm the bubble still contains long scrambling text and the tail remains
   connected at mobile width.
