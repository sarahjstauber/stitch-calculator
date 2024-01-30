import type { SelectHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../colors.ts";

const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 999px;
  color: ${colors["federal-blue"]};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  transition: box-shadow 300ms;
  width: 100%;

  &:focus-visible {
    box-shadow: 1px 1px 17px white;
    outline: none;
  }
`;
const Option = styled.option``;

export type OptionProps = {
  children: string;
  disabled?: boolean;
  value: string;
};
type DropdownProps = {
  options: OptionProps[];
  value: unknown;
} & SelectHTMLAttributes<HTMLSelectElement>;
export const Dropdown = ({ options, ...restProps }: DropdownProps) => {
  if (!options || !options?.length) return null;

  return (
    <Select {...restProps}>
      {options.map((option) => (
        <Option key={option.value} {...option} />
      ))}
    </Select>
  );
};
