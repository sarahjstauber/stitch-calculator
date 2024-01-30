import { Button } from "../../../ui";
import { IntroBody, IntroContainer, IntroTitle } from "./styles.ts";

export const IntroSection = () => {
  const navigateDown = () => {window.scrollTo(0, 1000)}

  return (
    <IntroContainer>
      <IntroTitle className="font-display text-federal-blue">
        easily calculate
        <br /> increases & decreases
      </IntroTitle>
      <IntroBody className="text-dim-grey">
        use the tools below to evenly <b>increase</b> or <b>decrease</b> across
        ribbing or any two rows of work
      </IntroBody>
      <Button fullWidth onClick={navigateDown} variant="big">
        calculate
      </Button>
    </IntroContainer>
  );
};
