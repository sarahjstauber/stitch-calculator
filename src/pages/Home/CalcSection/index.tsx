import { Buttons } from "./Buttons";
import { Container, InputsContainer, Title } from "./styles.ts";
import { Inputs } from "./Inputs";
import { useHomeProvider } from "../provider/useHomeProvider.ts";

export const CalcSection = () => {
  const { onCalculate, onReset } = useHomeProvider();

  return (
    <Container onReset={onReset} onSubmit={onCalculate}>
      <Title className="font-display">calculate one row</Title>
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
