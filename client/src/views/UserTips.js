import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableTemplate from "../templates/TableTemplate";
import MediaQuery from "react-responsive";
import ThreadsTable from "../templates/ThreadsTable";
import { getUserTips } from "../actions/tip";
import { connect } from "react-redux";

const MainWrapper = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
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
  const { getUserTips } = props;

  useEffect(() => {
    getUserTips(userName);
  }, []);

  return (
    <MainWrapper>
      <TableTemplate>
        <StyledTr>
          <MediaQuery query="(max-device-width: 500px)">
            <StyledTh style={{ width: "50px" }} />
            <StyledTh>MATCH</StyledTh>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 501px)">
            <StyledTh>CATEGORY</StyledTh>
            <StyledTh>MATCH</StyledTh>
            <StyledTh>BET ON</StyledTh>
            <StyledTh>ODD</StyledTh>
            <StyledTh>VOTES</StyledTh>
          </MediaQuery>
        </StyledTr>
      </TableTemplate>

      <TableTemplate>
        <StyledTr>
          <MediaQuery query="(max-device-width: 500px)">
            <StyledTh style={{ width: "50px" }} />
            <StyledTh>MATCH</StyledTh>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 501px)">
            <StyledTh>CATEGORY</StyledTh>
            <StyledTh>MATCH</StyledTh>
            <StyledTh>BET ON</StyledTh>
            <StyledTh>ODD</StyledTh>
            <StyledTh>VOTES</StyledTh>
          </MediaQuery>
        </StyledTr>
      </TableTemplate>
    </MainWrapper>
  );
}

UserTips.propTypes = {};

export default connect(
  null,
  { getUserTips }
)(UserTips);
