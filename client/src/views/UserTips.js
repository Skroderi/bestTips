import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getUserTips, addTip } from "../actions/tip";
import { connect } from "react-redux";
import CircleSpinner from "../components/atoms/Spinner/CircleSpinner";
import ProfileTips from "../components/molecules/UserProfile/ProfileTips";

const MainWrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 30px;
  text-align: center;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  max-width: 700px;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
`;

function UserTips({ tips, getTips, match, getUserTips }) {
  const userName = match.params.id;

  useEffect(() => {
    getUserTips(userName);
  }, [getTips]);

  return (
    <MainWrapper>
      <h1>{userName} tips</h1>
      {tips.loading ? (
        <Fragment>
          <CircleSpinner />
        </Fragment>
      ) : (
        <InnerWrapper>
          <ProfileTips userName={userName} userTips={tips} />
        </InnerWrapper>
      )}
    </MainWrapper>
  );
}

UserTips.propTypes = {
  tips: PropTypes.object.isRequired,
  getUserTips: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tips: state.tips.userTips
});

export default connect(mapStateToProps, { getUserTips, addTip })(UserTips);
