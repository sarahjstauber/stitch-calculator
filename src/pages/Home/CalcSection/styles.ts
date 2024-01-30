import styled from "styled-components";

export const Container = styled.form`
  margin: 0 auto;
  max-width: 730px;
  padding: 0 30px 5rem;
  @media (min-width: 768px) {
    padding: 0 0 7rem;
  }
  @media (max-width: 360px) {
    padding: 0 0 4rem;
  }
`;
export const Title = styled.h2`
  color: white;
  font-size: 1.625rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3.125rem;
  }
`;
export const InputsContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
