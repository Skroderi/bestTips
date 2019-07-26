import React from "react";
import styled from "styled-components";
import Logo from "components/atoms/NavItems/Logo/Logo";
import NavItem from "components/atoms/NavItems/NavItem/NavItem";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
          <NavItem as={NavLink} exact to="/" activeClassName="active">
            All Tips
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/football" activeClassName="active">
            Football Tips
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/tennis" activeClassName="active">
            Tennis Tips
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/hockey" activeClassName="active">
            Hockey Tips
          </NavItem>
        </li>
      </StyledNavList>
      <NavItem onClick={login}>Login/Register</NavItem>
    </StyledTopNavBar>
  );
};

export default TopNavBar;
