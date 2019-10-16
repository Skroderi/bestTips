import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getUserTips, addTip, getTips } from "../actions/tip";
import { connect } from "react-redux";
import Spinner from "../components/atoms/Spinner/Spinner";
import ProfileTips from "../components/molecules/UserProfile/ProfileTips";

const MainWrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 30px;
  text-align: center;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  max-width: 1100px;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

function UserTips({ tips, getTips, match }) {
  const userName = match.params.id;

  useEffect(() => {
    getTips();
  }, [getTips]);

  return (
    <MainWrapper>
      <h1>{userName} tips</h1>
      {tips.loading === true ? (
        <Fragment>
          <Spinner />
        </Fragment>
      ) : (
        <InnerWrapper>
          <ProfileTips userName={userName} tips={tips} />
        </InnerWrapper>
      )}
    </MainWrapper>
  );
}

UserTips.propTypes = {
  tips: PropTypes.object.isRequired,
  getTips: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tips: state.tips
});

export default connect(
  mapStateToProps,
  { getUserTips, addTip, getTips }
)(UserTips);
