# Fixed Clay Tail Design

## Problem

The current SVG combines the body and tail, then stretches the full image to
the bubble's width and height. Phrase length therefore changes the tail's
height, width, and curvature. Bottom padding also serves both text and tail
layout, leaving inconsistent space around the copy.

## Design

Render the clay body and tail as separate SVG-backed layers:

- The body stretches with content and is clipped to fixed CSS corner radii.
- The tail has fixed pixel dimensions and a rounded Bézier silhouette.
- The tail overlaps behind the body so the join remains hidden.
- The outer bubble reserves a fixed-height tail slot.
- Text receives independent, equal visual padding inside the body.
- A stable responsive bubble width keeps the tail's horizontal anchor fixed.

The bubble remains bottom-anchored so the tail tip continues to meet Josh's
raised finger for both short and long phrases.

## Verification

Compare short and longest phrases at desktop, 480 px, and 375 px. Confirm the
tail dimensions do not change, text remains inside the body with visible
padding, and the page has no horizontal overflow.
