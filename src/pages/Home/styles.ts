import styled from "styled-components";
import { colors } from "../../ui/colors.ts";

export const BottomContainer = styled.div`
  background-color: ${colors["tropical-indigo"]};
  border-radius: 40px 40px 0 0;
  padding: 3.75rem 20px 0;

  @media (min-width: 768px) {
    padding: 6.25rem 5rem 0;
  }
`;
