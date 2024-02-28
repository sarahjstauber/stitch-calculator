import { Button } from "../../../ui";
import { IntroBody, IntroContainer, IntroTitle } from "./styles.ts";
import { useNavigate } from "react-router-dom";

export const IntroSection = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/calculator");
  };

  return (
    <IntroContainer>
      <IntroTitle>
        easily calculate
        <br /> increases & decreases
      </IntroTitle>
      <IntroBody>
        evenly <i>increase</i> or <i>decrease</i> across ribbing or any two rows
        of knit or crochet work
      </IntroBody>
      <Button fullWidth onClick={onClick} variant="big">
        calculate
      </Button>
    </IntroContainer>
  );
};
