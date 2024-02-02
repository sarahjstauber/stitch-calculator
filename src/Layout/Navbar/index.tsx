import { Container, Title } from "./styles.ts";
import { useLocation } from "react-router-dom";
import { Menu } from "./Menu";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Container className="font-display" id="navbar">
      <Title $isCurrentPage={location.pathname === "/"} to="/">
        stitch calculator
      </Title>
      <Menu />
    </Container>
  );
};
