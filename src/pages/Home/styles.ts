import styled from "styled-components";

export const Container = styled.div`
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
