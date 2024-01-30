import { IntroSection } from "./IntroSection";
import { CalcSection } from "./CalcSection";
import { ResultSection } from "./ResultSection";
import { HomeProvider } from "./provider/HomeProvider.tsx";
import { BottomContainer } from "./styles.ts";
import { Footer } from "../../Layout/Footer";

export const Home = () => {
  return (
    <HomeProvider>
      <>
        <IntroSection />
        <BottomContainer>
          <CalcSection />
          <ResultSection />
          <Footer textColor="light" />
        </BottomContainer>
      </>
    </HomeProvider>
  );
};
