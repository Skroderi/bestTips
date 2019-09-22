import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavProfile from "../../../molecules/NavProfile/NavProfile";
import Auth from "../../../molecules/Auth/Auth";
import styled, { keyframes, css } from "styled-components";
import Spinner from "components/atoms/Spinner/Spinner";

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
  top: ${({ theme }) => theme.topNavHeight};
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.3);
  transform: translate(-120%);
  z-index: 999;
  overflow: auto;
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
  ${({ theme }) => theme.media.tablet} {
    width: 300px;
  }
`;

const LeftSideBar = ({
  isLoginBarVisible,
  toggleLeftSideBar,
  auth: { isAuthenticated, loading }
}) => {
  return (
    <StyledLeftSideBar isLoginBarVisible={isLoginBarVisible}>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {isAuthenticated ? (
            <NavProfile toggleLeftSideBar={toggleLeftSideBar} />
          ) : (
            <Auth />
          )}
        </Fragment>
      )}
    </StyledLeftSideBar>
  );
};

LeftSideBar.propTypes = {
  isLoginBarVisible: PropTypes.bool.isRequired,
  toggleLeftSideBar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LeftSideBar);
