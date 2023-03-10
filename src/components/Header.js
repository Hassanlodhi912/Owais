import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import HeaderIcon from "../images/HeaderIcon.png"
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <strong>
        <h2>Degree Verification</h2>
          </strong>
      </NavLink>
      <Nav />

    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

 
`;
export default Header;
