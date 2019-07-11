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
  box-shadow: 5px 0px 15px rgba(0, 0, 0, 0.3);
`;
const StyledHeader = styled.h1`
  margin: 0;
  text-align: left;
`;
const StyledInput = styled(Input)`
  margin: 12px 0px;
`;

const LeftSideBar = () => {
  return (
    <StyledLeftSideBar>
      <StyledHeader>SIGN IN</StyledHeader>
      <StyledInput placeholder="login" />
      <StyledInput placeholder="password" password />
      <LoginButton>LOGIN</LoginButton>
      <p>
        Don't have account yet? <a href="/">Register here!</a>
      </p>
    </StyledLeftSideBar>
  );
};

export default LeftSideBar;
