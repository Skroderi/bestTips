import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserTips } from "../actions/tip";
import UserStats from "../components/molecules/UserProfile/UserStats";

const MainWrapper = styled.div`
  width: 70%;
  max-width: 500px;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  text-align: Center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Statistics = ({ tips, getUserTips, match }) => {
  const userName = match.params.id;
  useEffect(() => {
    getUserTips(userName);
  }, [getUserTips, userName]);

  return (
    <MainWrapper>
      <h1>{userName} stats</h1>
      {tips.loading ? false : <UserStats userName={userName} userTips={tips} />}
    </MainWrapper>
  );
};

Statistics.propTypes = {
  tips: PropTypes.object.isRequired,
  getUserTips: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  tips: state.tips.userTips
});

export default connect(mapStateToProps, { getUserTips })(Statistics);
