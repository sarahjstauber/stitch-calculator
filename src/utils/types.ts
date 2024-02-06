export const STITCHES = {
  st: { plural: "stitches", singular: "stitch" },
  sc: { plural: "single crochets", singular: "single crochet" },
  hdc: { plural: "half double crochets", singular: "half double crochet" },
  dc: { plural: "double crochets", singular: "double crochet" },
  tr: { plural: "treble crochets", singular: "treble crochet" },
  dtr: { plural: "double treble crochets", singular: "double treble crochet" },
  tss: {
    plural: "tunisian simple stitches",
    singular: "tunisian simple stitch",
  },
  tks: { plural: "tunisian knit stitches", singular: "tunisian knit stitch" },
  tdc: {
    plural: "tunisian double crochets",
    singular: "tunisian double crochet",
  },
  tfs: { plural: "tunisian full stitches", singular: "tunisian full stitch" },
  tps: { plural: "tunisian purl stitches", singular: "tunisian purl stitch" },
  slst: { plural: "slip stitches", singular: "slip stitch" },
  rib: { plural: "rows", singular: "row" },
  k: { plural: "knits", singular: "knit" },
  p: { plural: "purls", singular: "purl" },
} as const;
export type STITCH_TYPES = keyof typeof STITCHES;

export const CHANGES = {
  dec: "decrease",
  inc: "increase",
  na: "no change",
} as const;
export type CHANGE_TYPES = keyof typeof CHANGES;
