# Clay Bubble Illustration Integration Design

## Goal

Make the speech bubble feel physically modeled from the same clay material as
the Josh illustration while preserving its seamless tail, readability,
animation, and responsive behavior.

## Browser Findings

- The current bubble and tail align correctly and do not create horizontal
  overflow at desktop or 375 px.
- The smooth gray-white surface reads as flat interface chrome beside the warm,
  textured illustration.
- Long phrases produce a narrow, tall bubble that feels more like a card than a
  sculpted speech form.

## Approved Direction

Keep one continuous SVG body-and-tail shape. Warm its palette to ivory clay,
add restrained procedural surface texture and slight edge irregularity, and
model the form with top-left light and lower-right shade matching the portrait.

Widen the bubble modestly and reposition the tail within the SVG so it remains
aimed at Josh's raised finger. Text, animation, and phrase generation remain
unchanged.

## Verification

- Compare screenshots at desktop, 481 px, 480 px, and 375 px.
- Measure for page-level horizontal overflow and text containment.
- Confirm the tail remains visually aligned with the raised finger.
- Run the production build and lint diagnostics.
