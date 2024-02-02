import { Buttons } from "./Buttons";
import { Container, InputsContainer, Title } from "./styles.ts";
import { Inputs } from "./Inputs";
import { useCalculatorProvider } from "../provider/useCalculatorProvider.ts";

export const CalcSection = () => {
  const { onCalculate, onReset } = useCalculatorProvider();

  return (
    <Container onReset={onReset} onSubmit={onCalculate}>
      <Title>calculate one row</Title>
      <InputsContainer>
        <Inputs
          countName="rowOneCount"
          typeName="rowOneType"
          title="starting edge / row"
        />
        <Inputs
          countName="rowTwoCount"
          typeName="rowTwoType"
          title="next row"
        />
      </InputsContainer>
      <Buttons />
    </Container>
  );
};
