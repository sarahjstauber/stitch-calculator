import { STITCHES } from "./types.ts";
import type { CHANGE_TYPES, STITCH_TYPES } from "./types.ts";

export function renderStitchDetails(num?: number, type?: STITCH_TYPES) {
  if (!num) return null;
  if (!type) type = "st";

  return num === 1
    ? `${num} ${STITCHES[type].singular}`
    : `${num} ${STITCHES[type].plural}`;
}

export function renderStitchPattern(
  num: number,
  type: CHANGE_TYPES | STITCH_TYPES,
): string {
  if (num === 1) return type;
  return num.toString() + type;
}
