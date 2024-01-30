import { useContext, useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { HomeContext, initialState } from "./HomeProvider.tsx";
import type { CHANGE_TYPES } from "../../../utils/types.ts";
import { generatePattern } from "../../../utils/generatePattern.ts";

const getChangeType = (
  rowOneCount: number,
  rowTwoCount: number,
): CHANGE_TYPES => {
  if (rowOneCount > rowTwoCount) return "dec";
  if (rowOneCount < rowTwoCount) return "inc";
  return "na";
};
export function useHomeProvider() {
  const { state, setState } = useContext(HomeContext);
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
      console.log(output);
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
    console.log({ state });
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
    console.log("onReset", { isCalculating });
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
