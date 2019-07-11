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
  background: rgba(210, 255, 82, 1);
  background: -moz-linear-gradient(
    top,
    rgba(210, 255, 82, 1) 0%,
    rgba(77, 189, 68, 1) 73%,
    rgba(77, 189, 68, 1) 74%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(210, 255, 82, 1)),
    color-stop(73%, rgba(77, 189, 68, 1)),
    color-stop(74%, rgba(77, 189, 68, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(210, 255, 82, 1) 0%,
    rgba(77, 189, 68, 1) 73%,
    rgba(77, 189, 68, 1) 74%
  );
  background: -o-linear-gradient(
    top,
    rgba(210, 255, 82, 1) 0%,
    rgba(77, 189, 68, 1) 73%,
    rgba(77, 189, 68, 1) 74%
  );
  background: -ms-linear-gradient(
    top,
    rgba(210, 255, 82, 1) 0%,
    rgba(77, 189, 68, 1) 73%,
    rgba(77, 189, 68, 1) 74%
  );
  background: linear-gradient(
    to bottom,
    rgba(210, 255, 82, 1) 0%,
    rgba(77, 189, 68, 1) 73%,
    rgba(77, 189, 68, 1) 74%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#4dbd44', GradientType=0 );
`;
const StyledNavList = styled.ul`
  display: flex;
  /* margin-right: 30vw; */
  list-style-type: none;
`;
const TopNavBar = () => {
  return (
    <StyledTopNavBar>
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
      <NavItem>Login/Register</NavItem>
    </StyledTopNavBar>
  );
};

export default TopNavBar;
