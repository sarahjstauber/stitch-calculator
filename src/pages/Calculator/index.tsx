import { CalcSection } from "./CalcSection";
import { ResultSection } from "./ResultSection";
import { CalculatorProvider } from "./provider/CalculatorProvider.tsx";
import { Container } from "./styles.ts";
import { Footer } from "../../Layout/Footer";

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <Container>
        <CalcSection />
        <ResultSection />
        <Footer textColor="light" />
      </Container>
    </CalculatorProvider>
  );
};
