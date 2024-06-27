import { Link } from "react-router-dom";
import { StyledNavList, StyledNavigation } from "./Header.styled";

export const Header = () => {
  return (
    <StyledNavigation>
      <StyledNavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="auth">Login</Link>
        </li>
      </StyledNavList>
    </StyledNavigation>
  );
};
