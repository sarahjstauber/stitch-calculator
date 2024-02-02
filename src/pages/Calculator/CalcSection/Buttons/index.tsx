import { Button } from "../../../../ui";
import {
  Container,
  Spacer,
  ClearWrapperBig,
  ClearWrapperSmall,
} from "./styles.ts";
import { useCalculatorProvider } from "../../provider/useCalculatorProvider.ts";

export const Buttons = () => {
  const { onReset } = useCalculatorProvider();

  return (
    <Container>
      <Button fullWidth type="submit" variant="secondary">
        calculate
      </Button>
      <Spacer />
      <ClearWrapperBig>
        <Button fullWidth onClick={onReset} type="reset" variant="dark">
          clear
        </Button>
      </ClearWrapperBig>
      <ClearWrapperSmall>
        <Button fullWidth onClick={onReset} type="reset" variant="empty">
          clear
        </Button>
      </ClearWrapperSmall>
    </Container>
  );
};
