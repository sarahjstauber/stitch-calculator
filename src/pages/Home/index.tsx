import { Footer } from "../../Layout/Footer";
import { IntroSection } from "./IntroSection";
import { Container } from "./styles.ts";

export const Home = () => {
  return (
    <Container>
      <IntroSection />
      <Footer textColor="dark" />
    </Container>
  );
};
