import React from "react";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";

const StyledHeader = styled.h1`
  margin: 0;
  text-align: left;
`;
const StyledInput = styled(Input)`
  margin: 12px 0px;
`;
const Login = () => {
  return (
    <>
      <StyledInput placeholder="login" />
      <StyledInput placeholder="password" password />
      <LoginButton>LOGIN</LoginButton>
      <p>
        Don't have account yet? <a href="/">Register here!</a>
      </p>
    </>
  );
};

export default Login;
