import React from "react";
import styled from "styled-components";
import logoIcon from "assets/icons/logoNav.jpg";

const StyledLogo = styled.a`
  display: block;
  width: 130px;
  height: 130px;
  margin-left: 25px;
  background-image: url(${logoIcon});
  background-size: 100px 90px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  /* cursor: pointer; */
`;

const Logo = () => {
  return (
    <a href="/">
      <StyledLogo />
    </a>
  );
};

export default Logo;
