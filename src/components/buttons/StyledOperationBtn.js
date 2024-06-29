import styled from "styled-components";

export const StyledOperationBtn = styled.button`
  border: 2px solid var(--main-accent-color);
  padding: 10px 15px;
  border-radius: 15px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  background-color: var(--main-accent-color);
  &:hover {
    background-color: white;
    color: var(--main-accent-color);
  }
  &:disabled {
    background-color: transparent;
    color: var(--main-accent-color);
    cursor: auto;
  }
`;
