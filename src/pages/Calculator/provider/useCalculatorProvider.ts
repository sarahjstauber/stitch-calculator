import { useContext, useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CalculatorContext, initialState } from "./CalculatorProvider.tsx";
import type { CHANGE_TYPES } from "../../../utils/types.ts";
import { generatePattern } from "../../../utils/generatePattern.ts";
import { scrollToElement } from "../../../utils/scrollToElement.ts";

const getChangeType = (
  rowOneCount: number,
  rowTwoCount: number,
): CHANGE_TYPES => {
  if (rowOneCount > rowTwoCount) return "dec";
  if (rowOneCount < rowTwoCount) return "inc";
  return "na";
};

export function useCalculatorProvider() {
  const { state, setState } = useContext(CalculatorContext);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (!!state.inputs.rowOneCount && !!state.inputs.rowTwoCount) {
      const changeType = getChangeType(
        state.inputs.rowOneCount,
        state.inputs.rowTwoCount,
      );
      setState({
        ...state,
        inputs: {
          ...state.inputs,
          changeType,
        },
      });
    }
  }, [state.inputs.rowOneCount, state.inputs.rowTwoCount]);

  useEffect(() => {
    if (state.output.pattern) scrollToElement("footer");
  }, [state.output.pattern]);

  const onCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCalculating(true);

    if (
      !!state.inputs.rowOneCount &&
      !!state.inputs.rowTwoCount &&
      !!state.inputs.changeType
    ) {
      const output = generatePattern({
        changeType: state.inputs.changeType,
        rowOneCount: state.inputs.rowOneCount,
        rowTwoCount: state.inputs.rowTwoCount,
        stitchType: state.inputs.rowTwoType ?? "st",
      });
      setState({
        ...state,
        output,
      });
    } else {
      setState({
        ...state,
        output: { pattern: "Please fill in all stitch counts" },
      });
    }
    setIsCalculating(false);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber } = event.target;
    setState({
      ...state,
      inputs: {
        ...state.inputs,
        [name]: valueAsNumber || value,
      },
    });
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setState({
      ...state,
      inputs: {
        ...state.inputs,
        [name]: value,
      },
    });
  };

  const onReset = () => {
    if (!isCalculating)
      setState({
        ...initialState,
        inputs: {
          ...initialState.inputs,
          rowOneCount: 0,
          rowTwoCount: 0,
        },
      });
  };

  return {
    inputsState: state.inputs,
    outputState: state.output,
    onCalculate,
    onChangeInput,
    onChangeSelect,
    onReset,
  };
}
