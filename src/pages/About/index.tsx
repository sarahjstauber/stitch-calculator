import {Body, InnerContainer, OuterContainer, Title} from "./styles.ts";
import {Footer} from "../../Layout/Footer";

export const About = () => {
  return (
    <OuterContainer>
      <InnerContainer>
      <Title className="font-display">about</Title>
      <Body>
        Welcome! This calculator is designed to help you figure how to evenly
        increase or decrease between any two rows. The inspiration for this tool
        came about one evening while one crocheter struggled to properly
        calculate the transition between ribbing Tunisian crochet. Enjoy!
      </Body></InnerContainer>
      <Footer textColor={"dark"}/>
    </OuterContainer>
  );
};
