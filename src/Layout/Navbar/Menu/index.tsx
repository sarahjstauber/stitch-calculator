import { useState } from "react";
import {
  HamburgerContainer,
  HamburgerBar,
  MenuContainer,
  MenuItem,
  MenuAnimation,
} from "./styles.tsx";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClickHamburger = () => setIsOpen((prev) => !prev);

  const onClickHomeMenuItem = () => {
    navigate("");
    setIsOpen(false);
  };
  const onClickCalculatorMenuItem = () => {
    navigate("/calculator");
    setIsOpen(false);
  };
  const onClickAboutMenuItem = () => {
    navigate("/about");
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerContainer $isMenuOpen={isOpen} onClick={onClickHamburger}>
        <HamburgerBar $isMenuOpen={isOpen} className="hamburger_bar" />
        <HamburgerBar $isMenuOpen={isOpen} className="hamburger_bar" />
        <HamburgerBar $isMenuOpen={isOpen} className="hamburger_bar" />
      </HamburgerContainer>
      <MenuContainer $isOpen={isOpen} id="menu_container">
        <MenuItem onClick={onClickHomeMenuItem}>home</MenuItem>
        <MenuItem onClick={onClickCalculatorMenuItem}>calculator</MenuItem>
        <MenuItem onClick={onClickAboutMenuItem}>about</MenuItem>
      </MenuContainer>
      <MenuAnimation $isOpen={isOpen} />
    </>
  );
};
