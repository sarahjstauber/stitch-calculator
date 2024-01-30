import type { CHANGE_TYPES, STITCH_TYPES } from "../../../utils/types.ts";

type InputsType = {
  changeType?: CHANGE_TYPES;
  rowOneCount?: number;
  rowOneType?: STITCH_TYPES;
  rowTwoCount?: number;
  rowTwoType?: STITCH_TYPES;
};
export type InputsTypeT = keyof InputsType;

type OutputsType = {
  pattern: string;
  details?: string;
};

export type StateType = {
  inputs: InputsType;
  output: OutputsType;
};
