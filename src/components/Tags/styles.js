import styled from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  max-width: 80%;
  color: black;
  border: 1px grey solid;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;

  #input {
    border: none;
    width: 100%;
    padding-left: 1rem;
    min-width: 15%;
    max-width: 100%;
  }

  .tag {
    display: flex;
    align-items: center;
    margin: 7px 0;
    margin-right: 10px;
    padding: 0 10px;
    padding-right: 5px;
    border-radius: 5px;
    background-color: #5283c2;
    white-space: nowrap;
    color: white;
  }

  .tag button {
    display: flex;
    padding: 6px;
    border: none;
    background-color: unset;
    cursor: pointer;
    color: white;
  }
`;
