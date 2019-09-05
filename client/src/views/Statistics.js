import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { log } from "util";
import { getUserTips, getTips } from "../actions/tip";
import Spinner from "../components/atoms/Spinner/Spinner";

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
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const StyledParagraph = styled.p`
  font-size: 22px;
`;

const StyledNumber = styled.p`
  display: block;
  font-size: 18px;
  text-align: Center;
`;
const Statistics = props => {
  const { getUserTips, getTips, userTips, loading } = props;
  const userName = props.match.params.id;
  useEffect(() => {
    getUserTips(userName);
    getTips();
  }, [getUserTips, getTips]);

  const win = userTips.filter(
    tip => tip.author === userName && tip.status === "win"
  );
  const returns = userTips.filter(
    tip => tip.author === userName && tip.status === "returns"
  );
  const lose = userTips.filter(
    tip => tip.author === userName && tip.status === "lose"
  );

  return (
    <MainWrapper>
      <h1>{userName} stats</h1>
      {!loading ? (
        <InnerWrapper>
          <div>
            <StyledParagraph>
              Win:<StyledNumber>{win.length}</StyledNumber>
            </StyledParagraph>
          </div>
          <div>
            <StyledParagraph>
              Return:<StyledNumber>{returns.length}</StyledNumber>
            </StyledParagraph>
          </div>
          <div>
            <StyledParagraph>
              Lose:<StyledNumber>{lose.length}</StyledNumber>
            </StyledParagraph>
          </div>
        </InnerWrapper>
      ) : (
        <Spinner />
      )}
    </MainWrapper>
  );
};

Statistics.propTypes = {};

const mapStateToProps = state => ({
  userTips: state.tips.current,
  loading: state.tips.loading
});

export default connect(
  mapStateToProps,
  { getUserTips, getTips }
)(Statistics);
