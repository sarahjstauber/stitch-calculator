import { Dropdown, Input } from "../../../../ui";
import { Container, Name, Title } from "./styles.ts";
import { useCalculatorProvider } from "../../provider/useCalculatorProvider.ts";
import type { InputsTypeT } from "../../provider/types.ts";
import { TYPE_OPTIONS } from "./utils.ts";

type InputSectionProps = {
  countName: InputsTypeT;
  typeName: InputsTypeT;
  title: string;
};
export const Inputs = ({ countName, typeName, title }: InputSectionProps) => {
  const { onChangeInput, onChangeSelect, inputsState } =
    useCalculatorProvider();

  return (
    <Container>
      <Title className="text-federal-blue">{title}</Title>
      <Name className="text-white">row / stitch count</Name>
      <Input
        min={0}
        name={countName}
        onChange={onChangeInput}
        placeholder="count"
        required
        style={{ marginLeft: "-0.25rem", marginBottom: "0.75rem" }}
        type="number"
        value={inputsState[countName]}
      />
      <Name className="text-white">row / stitch type</Name>
      <Dropdown
        defaultValue="default"
        name={typeName}
        onChange={onChangeSelect}
        options={TYPE_OPTIONS()}
        value={inputsState[typeName]}
      />
    </Container>
  );
};
