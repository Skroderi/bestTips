import React from "react";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";

const StyledInput = styled(Input)`
  margin: 12px 0px;
`;
const Login = () => {
  return (
    <form>
      <StyledInput placeholder="login" />
      <StyledInput placeholder="password" password />
      <LoginButton>LOGIN</LoginButton>
      <p>
        Don't have account yet? <a href="/">Register here!</a>
      </p>
    </form>
  );
};

export default Login;
