import { About, Container, Title } from "./styles.ts";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Container className="font-display">
      <Title $isCurrentPage={location.pathname === "/"} to="/">
        stitch calculator
      </Title>
      <About $isCurrentPage={location.pathname === "/about"} to="about">
        about
      </About>
    </Container>
  );
};
