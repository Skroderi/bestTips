import React from "react";
import styled from "styled-components";
import Logo from "components/atoms/NavItems/Logo/Logo";
import NavItem from "components/atoms/NavItems/NavItem/NavItem";

const StyledTopNavBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0%;
  height: 130px;
  width: 100%;
  background: black;
`;
const StyledNavList = styled.ul`
  display: flex;
  /* margin-right: 30vw; */
  list-style-type: none;
`;

const TopNavBar = ({ login }) => {
  return (
    <StyledTopNavBar login={login}>
      <Logo />
      <StyledNavList>
        <li>
          <NavItem>All Tips</NavItem>
        </li>
        <li>
          <NavItem>Footbal Tips</NavItem>
        </li>
        <li>
          <NavItem>Tenis Tips</NavItem>
        </li>
      </StyledNavList>
      <NavItem onClick={login}>Login/Register</NavItem>
    </StyledTopNavBar>
  );
};

export default TopNavBar;
