import styled from "styled-components";
import { colors } from "../../ui/colors.ts";

export const OuterContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2.25rem;
  max-width: 600px;
  min-height: calc(100vh - 2rem - 32px);

  @media (min-width: 1024px) {
    min-height: calc(100vh - 2rem - 40px);
  }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h2`
  color: ${colors["federal-blue"]};
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 2rem;
`;
export const Body = styled.p`
  color: dimgray;
  font-size: 1.5rem;
  margin-bottom: 3.125rem;
`;
