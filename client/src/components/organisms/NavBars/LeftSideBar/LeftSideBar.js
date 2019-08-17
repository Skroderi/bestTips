import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavProfile from "../../../molecules/NavProfile/NavProfile";
import LoginRegister from "../../../molecules/Auth/LoginRegister";
import styled, { keyframes, css } from "styled-components";

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
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.3);
  transform: translate(-120%);
  animation: ${({ isLoginBarVisible }) =>
    isLoginBarVisible
      ? css`
          ${LeftSideBarIn} 0.7s ease-in-out
        `
      : null};
  animation-fill-mode: forwards;
  background: rgba(14, 11, 14, 1);
  background: -moz-linear-gradient(
    top,
    rgba(14, 11, 14, 1) 4%,
    rgba(67, 68, 64, 1) 76%,
    rgba(67, 68, 64, 1) 100%
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

const LeftSideBar = ({
  isLoginBarVisible,
  auth: { isAuthenticated, loading }
}) => {
  return (
    <StyledLeftSideBar isLoginBarVisible={isLoginBarVisible}>
      {!loading && (
        <Fragment>
          {isAuthenticated ? <NavProfile /> : <LoginRegister />}
        </Fragment>
      )}
    </StyledLeftSideBar>
  );
};

LeftSideBar.propTypes = {
  isLoginBarVisible: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LeftSideBar);
