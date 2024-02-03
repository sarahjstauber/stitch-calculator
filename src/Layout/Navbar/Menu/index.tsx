import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HamburgerContainer,
  HamburgerBar,
  MenuContainer,
  MenuItem,
  MenuAnimation,
} from "./styles.tsx";

type MenuItemT = {
  name: string;
  pathname: string;
};
const menuItems: MenuItemT[] = [
  { name: "home", pathname: "" },
  { name: "calculator", pathname: "/calculator" },
  { name: "about", pathname: "/about" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onClickHamburger = () => setIsOpen((prev) => !prev);
  const onClickMenuItem = (to: string) => {
    if (location.pathname !== to) navigate(to);
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerContainer $isMenuOpen={isOpen} onClick={onClickHamburger}>
        <HamburgerBar className="hamburger_bar" />
        <HamburgerBar className="hamburger_bar" />
        <HamburgerBar className="hamburger_bar" />
      </HamburgerContainer>
      <MenuContainer $isOpen={isOpen} id="menu_container">
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => onClickMenuItem(item.pathname)}
            $isCurrentPage={location.pathname === item.pathname}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuContainer>
      <MenuAnimation $isOpen={isOpen} />
    </>
  );
};
