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
        use the tools below to evenly <b>increase</b> or <b>decrease</b> across
        ribbing or any two rows of work
      </IntroBody>
      <Button fullWidth onClick={onClick} variant="big">
        calculate
      </Button>
    </IntroContainer>
  );
};
