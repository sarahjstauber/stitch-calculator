export const CHANGES = {
  dec: "decrease",
  inc: "increase",
  na: "stitch",
} as const;
export type CHANGE_TYPES = keyof typeof CHANGES;

// Euclidean algorithm for greatest common denominator
function getGCD(a: number, b: number) {
  if (!b) return Math.abs(a);
  return getGCD(b, a % b);
}

export function rapidChange(props: { startCount: number; endCount: number }) {
  if (!props.startCount || !props.endCount) {
    throw new Error("Both start and end counts must be provided");
  }

  const changeCount = Math.abs(props.endCount - props.startCount);
  const normalCount = Math.min(props.startCount, props.endCount) - changeCount;
  const changeType: CHANGE_TYPES =
    props.startCount === props.endCount
      ? "na"
      : props.endCount > props.startCount
        ? "inc"
        : "dec";

  // throw error if there are more inc/dec stitches than can be handled with 2-stitch inc/dec
  if (normalCount < 0) {
    throw new Error(
      `Cannot rapidly ${CHANGES[changeType]} from ${props.startCount} to ${props.endCount} stitches with this calculator. Please try again with different numbers.`,
    );
  }

  // CALCULATE STEPS AND REPEATS
  const steps: Array<{ count: number; change: CHANGE_TYPES }> = [];
  let repeatCount = getGCD(changeCount, normalCount);

  if (changeCount === 0 || normalCount === 0) {
    // changeType will be "na" if changeCount is 0
    steps.push({ count: normalCount || changeCount, change: changeType });
    // no repeats if only one type of stitch
    repeatCount = 1;
  } else {
    let changeStitchesPerRepeat = changeCount / repeatCount;
    let normalStitchesPerRepeat = normalCount / repeatCount;
    const totalStitchesPerRepeat =
      Math.min(props.startCount, props.endCount) / repeatCount;

    for (let i = 0; i < totalStitchesPerRepeat; i++) {
      if (i % 2 === 0 && normalStitchesPerRepeat > 0) {
        // add normal stitches as a ratio of remaining normal stitches to change stitches
        const normalStitches = Math.ceil(
          normalStitchesPerRepeat / changeStitchesPerRepeat,
        );
        steps.push({
          count: normalStitches,
          change: "na",
        });
        normalStitchesPerRepeat -= normalStitches;
      } else if (changeStitchesPerRepeat > 0) {
        // add change stitches as a ratio of remaining change stitches to normal stitches
        const changeStitches = Math.ceil(
          changeStitchesPerRepeat / (normalStitchesPerRepeat + 1),
        );
        steps.push({
          count: changeStitches,
          change: changeType,
        });
        changeStitchesPerRepeat -= changeStitches;
      }
    }
  }

  // COMPOSE PATTERN STRING AND DESCRIPTION
  let pattern = "";
  let description = "";

  steps.forEach((step, index) => {
    if (index > 0) {
      pattern += ", ";
      description += ", ";
    }

    const stitchType = step.change === "na" ? "st" : step.change;
    const count = step.count > 1 ? step.count.toString() : "";
    pattern += `${stitchType}${count}`;
    description += `${CHANGES[step.change]} ${step.count}`;
  });
  // indicate repeats if there's more than one
  if (repeatCount > 1) {
    pattern = `(${pattern}) ×${repeatCount}`;
    description = `*[${description}], repeat from * ${repeatCount} times total`;
  }

  // indicate final stitch count in pattern
  pattern += ` (${props.endCount} sts)`;

  return {
    pattern,
    description,
  };
}
