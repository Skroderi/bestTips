import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserTips, getTips } from "../actions/tip";
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

const Statistics = ({ tips, getTips, match, loading }) => {
  useEffect(() => {
    getTips();
  }, [getTips]);
  const userName = match.params.id;

  return (
    <MainWrapper>
      <h1>{userName} stats</h1>
      {loading ? null : (
        <UserStats userName={userName} tips={tips} loading={loading} />
      )}
    </MainWrapper>
  );
};

Statistics.propTypes = {
  tips: PropTypes.object.isRequired,
  getTips: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  tips: state.tips,
  loading: state.tips.loading
});

export default connect(
  mapStateToProps,
  { getUserTips, getTips }
)(Statistics);
