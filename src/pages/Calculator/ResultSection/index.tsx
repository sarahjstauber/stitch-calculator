import { useCalculatorProvider } from "../provider/useCalculatorProvider.ts";
import { Container, Description, Info, Result } from "./styles.ts";
import { Button } from "../../../ui";
import { CHANGES, STITCHES } from "../../../utils/types.ts";
import { renderStitchDetails } from "../../../utils/renderStitches.ts";

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

  const defaultDetails = `given ${renderStitchDetails(rowOneCount, rowOneType)} 
        and ${rowTwoCount} desired ${STITCHES[rowTwoType].plural}, `;
  let tooltipText = `${rowTwoType} = ${STITCHES[rowTwoType].singular}\n${changeType} = ${CHANGES[changeType ?? "na"]}`;
  if (rowOneType !== rowTwoType) {
    tooltipText =
      `${rowOneType} = ${STITCHES[rowOneType].singular}\n` + tooltipText;
  }

  return (
    <Container>
      <Info aria-description="information" data-tooltip={tooltipText}>
        i
      </Info>
      <Result>{outputState.pattern}</Result>
      <Description>
        {outputState.pattern !== "error!" && defaultDetails}
        {`${outputState.details}`}
      </Description>
      <Button onClick={onReset} style={{ alignSelf: "center" }}>
        reset
      </Button>
    </Container>
  );
};
