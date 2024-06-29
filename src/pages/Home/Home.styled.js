import styled from "styled-components";

const StyledAssistantWrapper = styled.div`
  min-width: 150px;
  height: auto;
  /* border: 1px solid red; */
  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`;
const StyledBtnControlWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 10px;
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  margin-bottom: 20px;
  position: relative;
`;
const StyledTopicWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
const StyledTopicTitle = styled.p`
  color: var(--main-accent-color);
  font-weight: 500;
  font-size: 20px;
`;
const StyledListenControls = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: 500px;
`;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export {
  StyledPageWrapper,
  StyledListenControls,
  StyledAssistantWrapper,
  StyledBtnControlWrapper,
  StyledHeroWrapper,
  StyledTopicWrapper,
  StyledTopicTitle,
};
