import styled from "styled-components";
import { colors } from "../../../ui/colors.ts";

export const HamburgerBar = styled.div<{ $isMenuOpen: boolean }>`
  background-color: ${colors["federal-blue"]};
  border-radius: 3px;
  height: 4px;
  transform-origin: left center;
  transition:
    300ms ease-in-out,
    background-color 1000ms ease-in-out;
  width: 28px;

  ${(props) =>
    props.$isMenuOpen && {
      backgroundColor: colors["ghost-white"],

      "&:nth-of-type(1)": {
        rotate: "45deg",
        translate: "0 -2px",
        width: `calc(22px * 1.41421356237)`,
      },
      "&:nth-of-type(2)": {
        opacity: 0,
        width: 0,
      },
      "&:nth-of-type(3)": {
        rotate: "-45deg",
        translate: "0 2px",
        width: `calc(22px * 1.41421356237)`,
      },
    }}
`;

export const HamburgerContainer = styled.div<{ $isMenuOpen: boolean }>`
  align-self: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 32px;
  z-index: 3;

  &:hover ${HamburgerBar} {
    background-color: ${colors["tropical-indigo"]};
    box-shadow: 0 0 12px #9381ff66;
  }

  ${(props) =>
    props.$isMenuOpen && {
      zIndex: 2,

      "&:hover .hamburger_bar": {
        backgroundColor: "white",
        boxShadow: "0 0 12px 1px white",
      },
    }}
`;

export const MenuContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  left: 0;
  opacity: 0;
  padding: 30vh 0;
  position: absolute;
  top: 0;
    //transition: opacity 500ms ease-in-out 200ms;
    //-moz-transition: opacity 500ms ease-in-out 200ms;
    transition-delay: 500ms;
  visibility: hidden;
  width: 100vw;

  ${(props) =>
    props.$isOpen && {
      opacity: 100,
      visibility: "visible",
    }}
`;

export const MenuItem = styled.h2`
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  line-height: 3.125rem;
  margin: 2.25rem 40px;
  transition: text-shadow 300ms ease-in-out;
  z-index: 999;

  &:hover {
    text-shadow: 0 0 20px white;
  }
`;

export const MenuAnimation = styled.div<{ $isOpen: boolean }>`
  background-color: ${colors["tropical-indigo"]};
  border-bottom-left-radius: 9999px;
  box-shadow: 0 0 30px #2f1d6233;
  height: 0;
  width: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: 1000ms ease-in-out;
  z-index: 0;

  ${(props) =>
    props.$isOpen && {
      height: "calc((100vh + 100vw))",
      width: "calc((100vh + 100vw))",
    }}
`;
