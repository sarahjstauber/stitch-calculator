import styled from "styled-components";
import { colors } from "../../ui/colors.ts";

export const Container = styled.div`
  background-color: ${colors["tropical-indigo"]};
  //border-radius: 40px 40px 0 0;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 2rem - 32px);
  padding: 3.75rem 20px 0;

  @media (min-width: 768px) {
    padding: 6.25rem 5rem 0;
  }
  @media (min-width: 1024px) {
    min-height: calc(100vh - 2rem - 40px);
  }
`;
