import React from "react";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";

const StyledLeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100vh;
  background: rgba(98, 222, 89, 1);
`;
const StyledHeader = styled.h1`
  margin: 0;
  text-align: left;
`;

const StyledInnerWrapper = styled.div``;

const LeftSideBar = () => {
  return (
    <StyledLeftSideBar>
      <StyledHeader>SIGN IN</StyledHeader>
      <Input placeholder="login" />
      <Input placeholder="password" password />
      <LoginButton>LOGIN</LoginButton>
      <p>
        Don't have account yet? <a href="/">Register here!</a>
      </p>
    </StyledLeftSideBar>
  );
};

export default LeftSideBar;
