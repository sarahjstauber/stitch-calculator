import { Container, Copyright } from "./styles.ts";

export const Footer = ({ textColor }: { textColor: "light" | "dark" }) => {
  return (
    <Container>
      <Copyright
        className={textColor === "light" ? "text-white" : "text-dim-grey"}
      >
        © 2024 Sarah J. Stauber
      </Copyright>
    </Container>
  );
};
