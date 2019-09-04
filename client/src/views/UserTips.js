import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableTemplate from "../templates/TableTemplate";
import MediaQuery from "react-responsive";
import ThreadsTable from "../templates/ThreadsTable";
import { getUserTips, addTip, getTips } from "../actions/tip";
import { connect } from "react-redux";
import TipCard from "..//components/molecules/TipCard/TipCard";
import Spinner from "../components/atoms/Spinner/Spinner";

const MainWrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 30px;
  text-align: center;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  max-width: 1000px;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StyledTr = styled.tr`
  background: ${({ theme }) => theme.colors.black};
  border: 30px solid black;
`;

const StyledTh = styled.th`
  font-size: 12px;
  padding: 10px;
  color: hsl(49, 100%, 58%);
`;

function UserTips(props) {
  const userName = props.match.params.id;
  const { getUserTips, tips, getTips } = props;

  useEffect(() => {
    getTips();
  }, [getTips]);

  return (
    <MainWrapper>
      <h1>{userName} tips</h1>
      <InnerWrapper>
        {tips.loading === true ? (
          <Fragment>
            <Spinner />
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <h2>Current</h2>
              <TableTemplate>
                <ThreadsTable />
                {tips.current
                  .filter(
                    tip => tip.author === userName && tip.current === true
                  )
                  .map((tip, id) => {
                    return <TipCard tip={tip} key={id} />;
                  })}
              </TableTemplate>
            </div>

            <div>
              <h2>History</h2>
              <TableTemplate>
                <ThreadsTable />
                {tips.current
                  .filter(
                    tip => tip.author === userName && tip.current === false
                  )
                  .map((tip, id) => {
                    return <TipCard tip={tip} key={id} />;
                  })}
              </TableTemplate>
            </div>
          </Fragment>
        )}
      </InnerWrapper>
    </MainWrapper>
  );
}

UserTips.propTypes = {};

const mapStateToProps = state => ({
  tips: state.tips
});

export default connect(
  mapStateToProps,
  { getUserTips, addTip, getTips }
)(UserTips);
