import React from "react";
import styled from "styled-components";
import logoIcon from "assets/icons/logo.svg";

const StyledLogo = styled.a`
  display: block;
  width: 130px;
  height: 90px;
  margin-left: 25px;
  background-image: url(${logoIcon});
`;

const Logo = () => {
  return <StyledLogo />;
};

export default Logo;
