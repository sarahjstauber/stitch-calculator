import { createContext, useState } from "react";
import type { Dispatch, ReactElement, SetStateAction } from "react";
import type { StateType } from "./types.ts";

export const initialState: StateType = {
  inputs: {
    changeType: undefined,
    rowOneCount: undefined,
    rowOneType: undefined,
    rowTwoCount: undefined,
    rowTwoType: undefined,
  },
  output: {
    pattern: "",
    details: "",
  },
};

export const HomeContext = createContext<{
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
}>({ state: initialState, setState: () => undefined });

export const HomeProvider = ({ children }: { children: ReactElement }) => {
  const [state, setState] = useState(initialState);

  return (
    <HomeContext.Provider value={{ state, setState }}>
      {children}
    </HomeContext.Provider>
  );
};
