import styled from "styled-components";

const StyledSharedLayoutWrapper = styled.div`
  background-color: lightblue;

  position: relative;
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  flex-grow: 1;
`;

export { StyledSharedLayoutWrapper, MainWrapper };
