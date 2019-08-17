import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dashboard } from "styled-icons/material/Dashboard";
import { Stats } from "styled-icons/boxicons-regular/Stats";
import { Profile } from "styled-icons/icomoon/Profile";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";
import { logout } from "../../../actions/auth";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 80%;
`;
const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
  list-style-type: none;
`;

const StyledNavItem = styled.li`
  margin: 10px 0;
  width: 100%;
  /* justify-content: center; */
`;
const StyledNavLink = styled(NavLink)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  grid-gap: 0px;
  font-size: 25px;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.lightBlue};
    grid-gap: 35px;
    box-shadow: ${({ theme }) => theme.card};
  }
`;
const Image = styled.img`
  border-radius: 50%;
  width: 50%;
`;

const NavProfile = ({ logout, user }) => {
  // console.log(user);

  return (
    <StyledWrapper>
      <Image src={user ? user.avatar : null} alt="User avatar" />
      <h2>Hi {user ? user.name : null}</h2>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink to="/" activeClassName="active">
            <Dashboard size="45" /> Home
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink activeClassName="active">
            <Profile size="45" /> My tips
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink activeClassName="active">
            <Stats size="45" /> Statistic
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={logout}>
            <LogOut size="45" /> Logout
          </StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledWrapper>
  );
};

NavProfile.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logout }
)(NavProfile);
