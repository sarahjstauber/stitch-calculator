import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../ui/colors.ts";

export const Container = styled.nav`
  background-color: ${colors["ghost-white"]};
  color: ${colors["federal-blue"]};
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 8px;
  position: sticky;
  top: 0;

  @media (min-width: 1024px) {
    padding: 24px 36px 16px;
  }
`;

const isDifferentPageStyles = css({
  "&:hover": {
    color: colors["tropical-indigo"],
  },
});
export const Title = styled(Link)<{ $isCurrentPage: boolean }>`
  transition: 300ms;
  ${(props) => (props.$isCurrentPage ? "" : isDifferentPageStyles)};

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;
