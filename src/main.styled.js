import styled from "styled-components";

const PageSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  /* border: 1px solid green; */
  @media screen and (min-width: 1024px) {
    padding-bottom: 80px;
    padding-top: 80px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  /* border: 1px solid red; */
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 15px;
  }
  @media screen and (min-width: 375px) {
    width: 375px;
    padding: 0 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 80px;
  }
`;
export { PageSection, Container };
