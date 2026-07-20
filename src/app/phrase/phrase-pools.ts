/**
 * Phrases are built as "starter + ending" within one category.
 * Pick a category first, then randomize only inside it — so combos stay coherent.
 *
 * To add material: put related starters/endings in the same category only.
 */
export interface PhraseCategory {
  /** Short label for editing — not shown in the UI. */
  readonly name: string;
  readonly starters: readonly string[];
  readonly endings: readonly string[];
}

export const PHRASE_CATEGORIES: readonly PhraseCategory[] = [
  {
    name: 'hunger',
    starters: ["I'm so hungry I could eat"],
    endings: ["an elephant's asshole."],
  },
  {
    name: 'plumbing',
    starters: ['The water pressure of this sink is like'],
    endings: ['two grannies pissing through it.'],
  },
  {
    name: 'jargon',
    starters: [
      'The latter consisted simply of six',
      'We need six',
      'Never forget the six',
    ],
    endings: [
      'hydrocoptic marzlevanes, so fitted to the ambifacient lunar waneshaft that side fumbling was effectively prevented.',
    ],
  },
  {
    name: 'chesterton',
    starters: [
      "Chesterton's fence says",
      'Before you tear it down,',
      'Rule one:',
    ],
    endings: [
      "leave Chesterton's fence alone.",
      "there's a reason that fence is there.",
      "don't touch Chesterton's fence.",
    ],
  },
  {
    name: 'ship-it',
    starters: ["Today's mantra:", 'Just', 'Remember:'],
    endings: ['ship that shit.'],
  },
  {
    name: 'deadlines',
    starters: ["I'll have it done by", "It'll be ready by"],
    endings: ['tomorrow.'],
  },
  {
    name: 'spartan',
    starters: ['Spartan:'],
    endings: ['AOS done right.'],
  },
  {
    name: 'war-stories',
    starters: ['Boys,'],
    endings: ['it was not a good night.'],
  },
];
