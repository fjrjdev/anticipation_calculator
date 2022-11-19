import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Side = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    padding: 20% 0 0 0;
    width: 100%;
    max-width: 60%;
    text-align: left;
    border-bottom: 2px solid var(--light-blue-color);
  }

  @media screen and (max-width: 900px) {
    div,
    h1,
    ul {
      max-width: 100%;
    }
    div {
      padding: 10% 0 0 0;
    }
  }

  @media screen and (max-width: 625px) {
    align-items: flex-start;

    ul {
      gap: 1rem;
    }
  }
  object-fit: contain;
  img {
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  max-width: 60rem;
  min-height: 35rem;

  justify-content: space-around;
  padding: 3rem;

  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  @media screen and (max-width: 675px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
