import styled from "styled-components";

const StyledSharedLayoutWrapper = styled.div`
  background-color: lightblue;

  position: relative;

  max-height: 100vh;
  min-width: 320px;
  top: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    top: 400px;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1024px;
  }
`;

const MainWrapper = styled.main`
  /* flex-grow: 1; */
`;

export { StyledSharedLayoutWrapper, MainWrapper };
