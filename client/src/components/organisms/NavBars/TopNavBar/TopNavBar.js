import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "components/atoms/Logo/Logo";
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
  height: ${({ theme }) => theme.topNavHeight};
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  z-index: 999;
`;
const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 18px;
`;
const NavItem = styled.p`
  color: white;
  margin: 10 20px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 15px;
  transition: 0.3s;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    border: 3px solid white;
  }
  &.active {
    border: 3px solid white;
  }
`;
const TopNavBar = ({
  toggleLeftSideBar,
  auth: { isAuthenticated, loading }
}) => {
  const authLinks = (
    <NavItem onClick={toggleLeftSideBar}>
      <User size="30" /> My Profile
    </NavItem>
  );
  const guestLinks = (
    <NavItem onClick={toggleLeftSideBar}>Login / Register</NavItem>
  );

  return (
    <StyledTopNavBar toggleLeftSideBar={toggleLeftSideBar}>
      <Logo />
      <StyledNavList>
        {/* <li>
          <NavItem as={NavLink} exact to="/tips" activeClassName="active">
            All Tips
          </NavItem>
        </li> */}
        {/* <li>
          <NavItem as={NavLink} to="/tips/football" activeClassName="active">
            Football
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/tennis" activeClassName="active">
            Tennis
          </NavItem>
        </li>
        <li>
          <NavItem as={NavLink} to="/tips/hockey" activeClassName="active">
            Hockey
          </NavItem>
        </li> */}
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
