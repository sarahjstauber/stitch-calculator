import { Container, Copyright } from "./styles.ts";

type FooterProps = {
  textColor?: "light" | "dark";
};
export const Footer = ({ textColor = "dark" }: FooterProps) => {
  return (
    <Container id="footer">
      <Copyright
        className={textColor === "light" ? "text-white" : "text-dim-grey"}
      >
        © 2024 Sarah J. Stauber
      </Copyright>
    </Container>
  );
};
