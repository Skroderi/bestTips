import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoIcon from "assets/icons/logoNav.jpg";

const StyledLogo = styled(Link)`
  display: block;
  width: 60px;
  height: 60px;
  margin: 10px;
  background-image: url(${logoIcon});
  background-size: 60px 50px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  /* cursor: pointer; */
`;

const Logo = () => {
  return <StyledLogo to="/" />;
};

export default Logo;
