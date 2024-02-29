import type { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../colors.ts";

const InputContainer = styled.input`
  border: 1px solid ${colors["tropical-indigo"]};
  border-radius: 999px;
  font-size: 1rem;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  transition: box-shadow 300ms;
  width: 100%;

  &:focus-visible {
    box-shadow: 1px 1px 17px ${colors["ghost-white"]};
    outline: none;
  }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export const Input = ({ ...restProps }: InputProps) => {
  return (
    <InputContainer
      className="bg-ghost-white text-federal-blue"
      {...restProps}
    />
  );
};
