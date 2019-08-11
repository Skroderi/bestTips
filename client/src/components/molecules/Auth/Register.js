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
const Register = () => {
  return (
    <>
      <StyledInput placeholder="Nickname" />
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" password />
      <StyledInput placeholder="Repeat password" password />
      <LoginButton>Register</LoginButton>
      <p>
        Already have account? <a href="/">Log In here!</a>
      </p>
    </>
  );
};

export default Register;
