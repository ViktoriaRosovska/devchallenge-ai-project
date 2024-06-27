import { Outlet } from "react-router-dom";
import { MainWrapper, StyledSharedLayoutWrapper } from "./SharedLayout.styled";
import { Header } from "../Header/Header";

export default function SharedLayout() {
  return (
    <StyledSharedLayoutWrapper>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </StyledSharedLayoutWrapper>
  );
}
