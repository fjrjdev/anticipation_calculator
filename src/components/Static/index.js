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
  max-width: 275px;
  gap: 1rem;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  max-width: 750px;
  min-height: 550px;
  justify-content: space-around;
  background-color: white;
  padding: 3rem;
`;
