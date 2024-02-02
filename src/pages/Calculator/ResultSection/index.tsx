import { useCalculatorProvider } from "../provider/useCalculatorProvider.ts";
import { Container, Description, Info, Result } from "./styles.ts";
import { Button } from "../../../ui";
import { STITCHES } from "../../../utils/types.ts";
import { renderStitchDetails } from "../../../utils/renderStitches.ts";

export const ResultSection = () => {
  const { inputsState, onReset, outputState } = useCalculatorProvider();

  if (!outputState.pattern) return null;

  const defaultDetails = `given ${renderStitchDetails(inputsState.rowOneCount, inputsState.rowOneType)} 
        and ${inputsState.rowTwoCount} desired ${STITCHES[inputsState.rowTwoType ?? "st"].plural}, `;
  return (
    <Container>
      <Info aria-description="information">i</Info>
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
