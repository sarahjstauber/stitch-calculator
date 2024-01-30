import styled, { css } from "styled-components";
import { colors } from "../colors.ts";

export type ButtonVariantsT = keyof typeof ButtonVariants;
const ButtonVariants = {
  big: css`
    background-color: ${colors["tropical-indigo"]};
    color: white;
    font-size: 1.5rem;
    padding: 0.75rem 3.25rem;
    &:hover {
      box-shadow: 1px 1px 30px ${colors["tropical-indigo"]};
    }
  `,
  primary: css`
    background-color: ${colors["tropical-indigo"]};
    color: ${colors["federal-blue"]};
    &:hover {
      box-shadow: 1px 1px 17px ${colors["tropical-indigo"]};
    }
  `,
  secondary: css`
    background-color: ${colors["ghost-white"]};
    color: ${colors["federal-blue"]};
    &:hover {
      box-shadow: 1px 1px 17px white;
    }
  `,
  dark: css`
    background-color: ${colors["federal-blue"]};
    color: white;
    &:hover {
      box-shadow: 1px 1px 17px ${colors["federal-blue"]};
    }
  `,
  empty: css`
    background-color: transparent;
    color: ${colors["federal-blue"]};
    &:hover {
      text-shadow: 7px 3px 10px ${colors["federal-blue"]};
    }
  }
  `,
} as const;

type ContainerTypes = { $variant: ButtonVariantsT };
export const Container = styled.button<ContainerTypes>`
  border-radius: 9999px;
  font-size: 1.25rem;
  padding: 0.5rem 3.25rem;
  transition: 400ms;

  &:focus-visible {
    outline: none;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }

  ${(props: ContainerTypes) => ButtonVariants[props.$variant]}
`;
