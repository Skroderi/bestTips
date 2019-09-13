import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import UserStats from "../components/molecules/UserProfile/UserStats";
import styled from "styled-components";
import { connect } from "react-redux";
import { getUser } from "../actions/user";
import ProfileTips from "../components/molecules/UserProfile/ProfileTips";
import Spinner from "../components/atoms/Spinner/Spinner";
import { getTips } from "../actions/tip";

const MainWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  text-align: Center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 30%;
  ${({ theme }) => theme.media.tablet} {
    width: 150px;
    height: 150px;
  }
`;
const StyledAvatarContainer = styled.div`
  display: flex;
  /* height: 200px; */
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  font-size: 3rem;
  padding: 0 20px;
  font-weight: bold;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 20px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

function UserProfile({ getUser, user, loading, getTips, tips, match }) {
  const userName = match.params.id;
  useEffect(() => {
    getUser(userName);
    getTips();
  }, [getUser, getTips, userName]);

  return (
    <MainWrapper>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <StyledAvatarContainer>
            <Avatar src={user ? user.avatar : null} alt="User avatar" />
            <Paragraph>{user.name}</Paragraph>
          </StyledAvatarContainer>
          <UserStats userName={userName} tips={tips} />
          <InnerWrapper>
            <ProfileTips userName={userName} tips={tips} />
          </InnerWrapper>{" "}
        </Fragment>
      )}
    </MainWrapper>
  );
}

UserProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getTips: PropTypes.func.isRequired,
  tips: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  tips: state.tips,
  loading: state.user.loading
});

export default connect(
  mapStateToProps,
  { getUser, getTips }
)(UserProfile);
