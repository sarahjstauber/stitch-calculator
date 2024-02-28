import { Body, InnerContainer, OuterContainer, Title } from "./styles.ts";
import { Footer } from "../../Layout/Footer";

export const About = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Title>about</Title>
        <Body>
          Welcome! This calculator is designed to help you figure how to evenly
          increase or decrease between any two rows of work. The inspiration for
          this tool came about one evening while Sarah struggled to properly
          calculate the transition between crochet ribbing and Tunisian crochet
          simple stitches. Enjoy!
        </Body>
      </InnerContainer>
      <Footer textColor={"dark"} />
    </OuterContainer>
  );
};
