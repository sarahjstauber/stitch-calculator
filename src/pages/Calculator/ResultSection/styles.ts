import styled from "styled-components";
import { colors } from "../../../ui/colors.ts";

export const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 6rem;
  max-width: 730px;
  padding: 1.125rem 1.25rem 1.5rem;
  @media (min-width: 768px) {
    margin: 0 auto 12rem;
    padding: 1.75rem 2rem 2rem;
  }
`;
export const Info = styled.div`
  align-items: center;
  align-self: end;
  border: 1px solid dimgray;
  border-radius: 20px;
  color: dimgray;
  cursor: pointer;
  display: flex;
  font-size: 8px;
  height: 14px;
  justify-content: center;
  margin-bottom: 1px;
  width: 14px;
`;
export const Result = styled.h4`
  color: ${colors["federal-blue"]};
  font-size: 1.25rem;
  margin: 0 0.625rem 0.875rem;
  @media (min-width: 768px) {
    margin: 1rem 3.5rem 1rem;
  }
`;
export const Description = styled.p`
  color: dimgray;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 0.625rem 3rem;
  @media (min-width: 768px) {
    margin: 0 3.5rem 3.75rem;
  }
`;