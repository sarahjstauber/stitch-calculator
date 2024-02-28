import { useCalculatorProvider } from "../provider/useCalculatorProvider.ts";
import { Container, Description, Info, Result } from "./styles.ts";
import { Button } from "../../../ui";
import { CHANGES, STITCHES } from "../../../utils/types.ts";
import type { STITCH_TYPES } from "../../../utils/types.ts";
import { renderStitchDetails } from "../../../utils/renderStitches.ts";

const getTooltipKeyItem = (rowType: STITCH_TYPES) =>
  `${rowType} = ${STITCHES[rowType].singular}\n`;

export const ResultSection = () => {
  const { inputsState, onReset, outputState } = useCalculatorProvider();
  const {
    rowOneCount,
    rowOneType = "st",
    rowTwoCount,
    rowTwoType = "st",
    changeType,
  } = inputsState;

  if (!outputState.pattern) return null;

  const defaultDetails = `given ${renderStitchDetails(rowOneCount, rowOneType)} and ${rowTwoCount} desired ${STITCHES[rowTwoType].plural}, `;

  let tooltipChangeKey = `${changeType ?? "na"} = ${CHANGES[changeType ?? "na"]}`;
  if (changeType === "dec") {
    tooltipChangeKey += ` (${rowTwoType} 2 ${rowOneType} together)`;
  } else if (changeType === "inc") {
    tooltipChangeKey += ` (2 ${rowTwoType})`;
  }

  let tooltipText = "";
  if (rowOneType !== rowTwoType) tooltipText += getTooltipKeyItem(rowOneType);
  tooltipText += getTooltipKeyItem(rowTwoType) + tooltipChangeKey;

  return (
    <Container>
      <Info aria-description="information" data-tooltip={tooltipText}>
        i
      </Info>
      <Result>{outputState.pattern}</Result>
      <Description>
        {outputState.pattern !== "error!" && defaultDetails}
        {`create:\n${outputState.details}`}
      </Description>
      <Button onClick={onReset} style={{ alignSelf: "center" }}>
        reset
      </Button>
    </Container>
  );
};
