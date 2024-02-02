import type { OptionProps } from "../../../../ui/Dropdown";
import { STITCHES } from "../../../../utils/types.ts";

export const TYPE_OPTIONS = (): OptionProps[] => {
  const defaultOption = {
    children: "select one",
    disabled: true,
    value: "default",
  };
  const typeOptions: OptionProps[] = [defaultOption];

  Object.entries(STITCHES).forEach((stitch) => {
    typeOptions.push({ children: stitch[1].plural, value: stitch[0] });
  });

  return typeOptions;
};
