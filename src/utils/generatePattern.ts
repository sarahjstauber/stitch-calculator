import { CHANGES, STITCHES } from "./types.ts";
import type { CHANGE_TYPES, STITCH_TYPES } from "./types.ts";
import type { StateType } from "../pages/Home/provider/types.ts";
import { renderStitchDetails, renderStitchPattern } from "./renderStitches.ts";

// Euclidean algorithm for greatest common denominator
function getGCD(a: number, b: number) {
  if (!b) return Math.abs(a);
  return getGCD(b, a % b);
}

type generatePatternProps = {
  rowOneCount: number;
  rowTwoCount: number;
  changeType: CHANGE_TYPES;
  stitchType: STITCH_TYPES;
};
type generatePatternReturnType = { pattern: string; details: string };
export function generatePattern({
  rowOneCount,
  rowTwoCount,
  changeType,
  stitchType,
}: generatePatternProps): StateType["output"] {
  // display simple pattern if the first and second numbers are the same and exit
  if (changeType === "na") {
    return {
      pattern: `${renderStitchPattern(rowOneCount, stitchType)} (${rowTwoCount})`,
      details: `make ${renderStitchDetails(rowOneCount, stitchType)}`,
    };
  }

  // gather values that will be used later
  let bigCount, smallCount;
  if (changeType === "dec") {
    bigCount = rowOneCount;
    smallCount = rowTwoCount;
  } else {
    bigCount = rowTwoCount;
    smallCount = rowOneCount;
  }
  const countDifference = bigCount - smallCount;

  // display error message if it's impossible to inc/dec nicely and exit
  if (countDifference > smallCount) {
    return {
      pattern: "error!",
      details: `${renderStitchDetails(rowOneCount, stitchType)} cannot be ${CHANGES[changeType]}d by ${renderStitchDetails(countDifference, stitchType)} over one row of work`,
    };
  }

  // display simple inc/dec pattern and exit
  if (countDifference === smallCount) {
    return {
      pattern: `${renderStitchPattern(countDifference, changeType)} (${rowTwoCount})`,
      details: `${CHANGES[changeType]} ${renderStitchDetails(countDifference, stitchType)}`,
    };
  }

  const result: generatePatternReturnType = { pattern: "", details: "" };
  const numOfRepeats = getGCD(countDifference, smallCount);
  const numOfChangeStitchesPerRepeat = countDifference / numOfRepeats;
  const numOfNormalStitchesPerRepeat =
    (smallCount - countDifference) / numOfRepeats;

  // indicate repeats only if there's more than one
  if (numOfRepeats !== 1) {
    result.pattern = "(";
    result.details = "*(";
  }

  if (
    numOfChangeStitchesPerRepeat === 1 ||
    numOfNormalStitchesPerRepeat === 1
  ) {
    // render two-part repeat for singular stitch
    result.pattern += `${renderStitchPattern(numOfChangeStitchesPerRepeat, changeType)}, ${renderStitchPattern(numOfNormalStitchesPerRepeat, stitchType)}`;
    result.details += `${CHANGES[changeType]} ${numOfChangeStitchesPerRepeat}, ${STITCHES[stitchType].singular} ${numOfNormalStitchesPerRepeat}`;
  } else if (numOfNormalStitchesPerRepeat > numOfChangeStitchesPerRepeat) {
    // render normal stitches at the beginning of the pattern
    let changeCounter = numOfChangeStitchesPerRepeat;
    let normalCounter = numOfNormalStitchesPerRepeat;
    for (let i = 0; i < smallCount; i++) {
      if (!changeCounter) {
        // all the inc/dec stitches have already been added
        result.pattern += `, ${renderStitchPattern(normalCounter, stitchType)}`;
        result.details += `, ${STITCHES[stitchType].singular} ${normalCounter}`;
        i = smallCount;
      } else if (i === 0) {
        // at 0 index, insert normal stitch
        result.pattern += `${stitchType}`;
        result.details += `${STITCHES[stitchType].singular} 1`;
        normalCounter--;
      } else if (i % 2 === 0) {
        // at even indices, insert inc/dec stitch
        result.pattern += `, ${stitchType}`;
        result.details += `, ${STITCHES[stitchType].singular} 1`;
        normalCounter--;
      } else if (i % 2 === 1) {
        // at odd indices, insert normal stitch
        result.pattern += `, ${changeType}`;
        result.details += `, ${CHANGES[changeType]} 1`;
        changeCounter--;
      }
    }
  } else {
    // default: start with inc/dec stitches
    let changeCounter = numOfChangeStitchesPerRepeat;
    let normalCounter = numOfNormalStitchesPerRepeat;
    for (let i = 0; i < smallCount; i++) {
      if (!normalCounter) {
        // all the normal stitches have already been added
        result.pattern += `, ${renderStitchPattern(changeCounter, changeType)}`;
        result.details += `, ${CHANGES[changeType]} ${changeCounter}`;
        i = smallCount;
      } else if (i === 0) {
        // at 0 index, insert inc/dec stitch
        result.pattern += `${changeType}`;
        result.details += `${CHANGES[changeType]} 1`;
        changeCounter--;
      } else if (i % 2 === 0) {
        // at even indices, insert inc/dec stitch
        result.pattern += `, ${changeType}`;
        result.details += `, ${CHANGES[changeType]} 1`;
        changeCounter--;
      } else if (i % 2 === 1) {
        // at odd indices, insert normal stitch
        result.pattern += `, ${stitchType}`;
        result.details += `, ${STITCHES[stitchType].singular} 1`;
        normalCounter--;
      }
    }
  }

  // indicate repeats only if there's more than one
  if (numOfRepeats !== 1) {
    result.pattern += `) ×${numOfRepeats}`;
    result.details += `), repeat from * ${numOfRepeats - 1} more times`;
  }

  // add total resulting stitch count to result
  result.pattern += ` (${rowTwoCount})`;
  return result;
  //   expect(output.details).toBe("increase 1, tunisian knit stitch 50")
}
