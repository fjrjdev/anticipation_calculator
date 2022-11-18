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
  }
  button {
    width: 100%;
    max-width: 80%;
  }
`;

export { StyledForm };
