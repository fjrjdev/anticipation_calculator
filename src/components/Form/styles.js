import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  min-width: 24rem;
  align-items: flex-start;
  input {
    width: 100%;
    max-width: 75%;
    padding-left: 1rem;
    border: 1px grey solid;
    height: 45px;
    border-radius: 5px;
    margin: 0;
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      outline: solid 1px var(--sub-color);
    }
  }
  button {
    width: 100%;
    max-width: 80%;
    background-color: var(--primary-color);
    color: white;
    font-size: 16px;
    border-style: none;
    border-radius: 5px;
    padding: 10px;
    transition: 0.4s;
    &:hover {
      filter: brightness(1.1);
      box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
    }
  }

  @media screen and (max-width: 625px) {
    min-width: 20rem;
  }
`;

export { StyledForm };
