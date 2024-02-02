import styled from "styled-components";
import { colors } from "../../../ui/colors.ts";

export const IntroContainer = styled.div`
  align-self: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
export const IntroTitle = styled.h2`
  color: ${colors["federal-blue"]};
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 2rem;
`;
export const IntroBody = styled.p`
  color: dimgray;
  font-size: 1.5rem;
  margin-bottom: 3.125rem;
`;
