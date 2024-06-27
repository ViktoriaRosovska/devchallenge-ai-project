import styled from "styled-components";

const StyledNavigation = styled.nav`
  height: 56px;
  background-color: var(--main-accent-color);
  padding: 10px 20px;
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 20px;
  color: white;
  justify-content: right;
`;
export { StyledNavigation, StyledNavList };
