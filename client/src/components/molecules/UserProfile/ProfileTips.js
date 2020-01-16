import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableTemplate from "../../../templates/TableTemplate";
import ThreadsTable from "../../../templates/ThreadsTable";
import HistoryThreadsTable from "../../../templates/HistoryThreadsTable";
import TipCard from "../TipCard/TipCard";

function ProfileTips({ userTips }) {
  console.log(userTips);

  const historyTips = userTips.tips.filter(tip => !tip.current);
  const currentTips = userTips.tips.filter(tip => tip.current);

  const Styledtbody = styled.tbody`
    tr:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.tableTh};
    }
  `;

  const StyledParagraph = styled.p`
    margin-bottom: 40px;
  `;

  return (
    <Fragment>
      <div>
        <h2>Current</h2>
        {currentTips.length > 0 ? (
          <>
            <TableTemplate>
              <Styledtbody>
                <ThreadsTable />
                {currentTips.map((tip, id) => {
                  return <TipCard tip={tip} key={id} />;
                })}
              </Styledtbody>
            </TableTemplate>
          </>
        ) : (
          <StyledParagraph>User have not current tips</StyledParagraph>
        )}
      </div>
      <div>
        <h2>History</h2>
        {historyTips.length > 0 ? (
          <>
            <TableTemplate>
              <tbody>
                <HistoryThreadsTable />
                {historyTips.map((tip, id) => {
                  return <TipCard tip={tip} key={id} />;
                })}
              </tbody>
            </TableTemplate>
          </>
        ) : (
          <StyledParagraph>User have not history tips</StyledParagraph>
        )}
      </div>
    </Fragment>
  );
}
ProfileTips.propTypes = {
  tips: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired
};

export default ProfileTips;
