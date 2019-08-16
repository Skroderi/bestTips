import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
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
const StyledNavLink = styled.a`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  grid-gap: 0px;
  font-size: 25px;
  padding: 10px 15px;
  color: white;
  width: 100%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover,
  &.active {
    color: #04da97;
    grid-gap: 20px;
    box-shadow: 1px 2px 4px #04da97, 1px 2px 4px #04da97;
  }
`;
const Image = styled.img`
  border-radius: 50%;
  width: 50%;
`;

const NavProfile = ({ logout, user: { name, avatar } }) => {
  // console.log(user);

  return (
    <StyledWrapper>
      <Image src={avatar ? avatar : null} alt="User avatar" />
      <h2>Hi {name ? name : null}</h2>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink>
            <Dashboard size="45" /> Home
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink>
            <Profile size="45" /> My tips
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink>
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
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logout }
)(NavProfile);
