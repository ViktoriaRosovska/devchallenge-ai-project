import styled from "styled-components";

export const StyledBtnPlay = styled.button`
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  min-width: 50px;
  max-width: 50px;
  width: 50px;
  height: 50px;
  min-height: 50px;
  max-height: 50px;
  padding: 0;
  margin: 0;

  & svg {
    fill: var(--main-accent-color);
  }
  &:hover {
    background-color: var(--main-accent-color);
    & svg {
      fill: white;
    }
  }
  &:disabled {
    background-color: transparent;
    color: var(--main-accent-color);
    cursor: auto;
    & svg {
      &:hover {
        fill: var(--main-accent-color);
      }
    }
    &:hover {
      & svg {
        fill: var(--main-accent-color);
      }
    }
  }
`;
