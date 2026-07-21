# Clay Speech Bubble Design

## Goal

Make the speech bubble visually match the clay portrait while preserving its
current placement, responsive sizing, animation, and readability.

## Approach

Use CSS-only layered gradients and shadows to create a subtle handmade clay
surface. Slightly asymmetric corners will keep the silhouette organic without
making it distracting or reducing usable text space.

The bubble tail will use the same clay colors and dimensional treatment so it
appears attached to the main form. Text color and all phrase-generation
behavior remain unchanged.

## Verification

- Confirm the Angular production build succeeds.
- Check that text remains legible and clipped during scrambling.
- Confirm the tail remains visually connected on desktop and mobile.
