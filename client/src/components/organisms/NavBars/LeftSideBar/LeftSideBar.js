import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import Login from "components/molecules/Auth/Login";
import Register from "components/molecules/Auth/Register";
import Alert from 'components/atoms/Alert'

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
const SwitchButton = styled.button`
  font-size: 25px;
  text-align: left;
  border: none;
  background: none;
  color: white;
  font-weight: bold;
  padding: 15px 25px;
  cursor: pointer;

  &.active {
    background: #04da97;
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
  border: 4px solid #04da97;
  border-radius: 30px;
  margin-bottom: 15px;
`;

const LeftSideBar = ({ isLoginBarVisible }) => {
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
const loginAfterRegister = ()=>{
      toggleFirstBtn(true);
      toggleSecondBtn(false);
}
  
  return (
    <StyledLeftSideBar isLoginBarVisible={isLoginBarVisible}>
    <Alert/>
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
      {firstButton ? <Login /> : <Register loginAfterRegister={loginAfterRegister}/>}
    </StyledLeftSideBar>
  );
};

LeftSideBar.propTypes = {
  isLoginBarVisible: PropTypes.bool.isRequired
};

export default LeftSideBar;
