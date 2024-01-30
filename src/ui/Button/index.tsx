import type { ButtonHTMLAttributes } from "react";
import { Container } from "./styles.ts";
import type { ButtonVariantsT } from "./styles.ts";

type ButtonProps = {
  children: string;
  fullWidth?: boolean;
  variant?: ButtonVariantsT;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({
  children,
  fullWidth = false,
  variant = "primary",
  ...restProps
}: ButtonProps) => {
  return (
    <Container
      $variant={variant}
      style={{ width: fullWidth ? "100%" : "fit-content" }}
      {...restProps}
    >
      {children}
    </Container>
  );
};
