import React, { useState } from "react";
import Login from "components/molecules/Auth/Login";
import Register from "components/molecules/Auth/Register";
import styled, { css } from "styled-components";
import Alert from "components/atoms/Alert/Alert";

const MainWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
  margin: 10px 0;
`;
const SwitchButton = styled.button`
  font-size: 18px;
  text-align: left;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &.active {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
  ${props =>
    props.left &&
    css`
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    `}
  ${props =>
    props.right &&
    css`
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    `}
`;
const StyledButtons = styled.div`
  display: inline-block;
  border: 4px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 30px;
  margin-bottom: 15px;
`;

const Auth = () => {
  const [firstButton, toggleFirstBtn] = useState(true);
  const [secondButton, toggleSecondBtn] = useState(false);

  const toggleButton = () => {
    if (!firstButton) {
      toggleFirstBtn(true);
      toggleSecondBtn(false);
    } else if (!secondButton) {
      toggleSecondBtn(true);
      toggleFirstBtn(false);
    }
  };
  const loginAfterRegister = () => {
    toggleFirstBtn(true);
    toggleSecondBtn(false);
  };

  return (
    <MainWrapper>
      <Alert />
      <StyledButtons>
        <SwitchButton
          onClick={() => toggleButton()}
          left
          className={firstButton ? "active" : ""}
        >
          Sign In
        </SwitchButton>
        <SwitchButton
          onClick={() => toggleButton()}
          right
          className={secondButton ? "active" : ""}
        >
          Sign Up
        </SwitchButton>
      </StyledButtons>
      {firstButton ? (
        <Login />
      ) : (
        <Register loginAfterRegister={loginAfterRegister} />
      )}
    </MainWrapper>
  );
};

export default Auth;
