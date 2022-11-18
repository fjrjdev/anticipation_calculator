import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  min-height: 100vh;
`;

export const FlexContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 625px) {
    align-items: flex-start;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  max-width: 60rem;
  min-height: 35rem;
  justify-content: space-around;
  background-color: white;
  padding: 3rem;

  @media screen and (max-width: 625px) {
    flex-direction: column;
  }
`;
export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
