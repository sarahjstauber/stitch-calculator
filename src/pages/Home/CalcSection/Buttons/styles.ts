import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 60px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;
export const Spacer = styled.div`
  padding: 0 8px;
`;
export const ClearWrapperSmall = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: inline-block;
  }
`;
export const ClearWrapperBig = styled.div`
  width: 100%;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
