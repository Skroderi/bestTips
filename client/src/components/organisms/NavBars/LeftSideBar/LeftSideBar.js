import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";

const LeftSideBarIn = keyframes`
  0% {
    transform:translate(-120%)
  }
  60% {
    transform:translate(20%)
  }
  100% {
    transform:translate(0%)
  }
`;

const StyledLeftSideBar = styled.div`
  position: fixed;
  top: 130px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100vh;
  color: white;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.3);
  transform: translate(-120%);
  animation: ${({ isLoginBarVisible }) =>
    isLoginBarVisible
      ? css`
          ${LeftSideBarIn} 0.7s ease-in-out
        `
      : ``};
  animation-fill-mode: forwards;

  background: rgba(14, 11, 14, 1);
  background: -moz-linear-gradient(
    top,
    rgba(14, 11, 14, 1) 4%,
    rgba(67, 68, 64, 1) 76%,
    rgba(67, 68, 64, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(4%, rgba(14, 11, 14, 1)),
    color-stop(76%, rgba(67, 68, 64, 1)),
    color-stop(100%, rgba(67, 68, 64, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(14, 11, 14, 1) 4%,
    rgba(67, 68, 64, 1) 76%,
    rgba(67, 68, 64, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(14, 11, 14, 1) 4%,
    rgba(67, 68, 64, 1) 76%,
    rgba(67, 68, 64, 1) 100%
  );
`;
const StyledHeader = styled.h1`
  margin: 0;
  text-align: left;
`;
const StyledInput = styled(Input)`
  margin: 12px 0px;
`;

const LeftSideBar = ({ isLoginBarVisible }) => {
  return (
    <StyledLeftSideBar isLoginBarVisible={isLoginBarVisible}>
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

LeftSideBar.propTypes = {
  isLoginBarVisible: PropTypes.bool.isRequired
};

export default LeftSideBar;
