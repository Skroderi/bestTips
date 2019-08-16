import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "components/atoms/NavItems/Logo/Logo";
import NavItem from "components/atoms/NavItems/NavItem/NavItem";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../../actions/auth";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";
import { User } from "styled-icons/boxicons-regular/User";

const StyledTopNavBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0%;
  height: 130px;
  width: 100%;
  background: black;
  z-index: 999;
`;
const StyledNavList = styled.ul`
  display: flex;
  /* margin-right: 30vw; */
  list-style-type: none;
`;

const TopNavBar = ({ login, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <NavItem onClick={login}>
      <User size="40" /> My Profile
    </NavItem>
  );
  const guestLinks = <NavItem onClick={login}>Login / Register</NavItem>;

  return (
    <StyledTopNavBar login={login}>
      <Logo />
      <StyledNavList>
        <li>
          <NavItem as={NavLink} exact to="/tips" activeClassName="active">
            All Tips
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/football" activeClassName="active">
            Football Tips
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/tennis" activeClassName="active">
            Tennis Tips
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/hockey" activeClassName="active">
            Hockey Tips
          </NavItem>
        </li>
      </StyledNavList>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </StyledTopNavBar>
  );
};

TopNavBar.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(TopNavBar);
