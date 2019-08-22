import React from "react";
import PropTypes from "prop-types";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";

const AllTipsHistory = ({ historyTips, match }) => {
  return (
    <TableTemplate>
      <tbody>
        {/* <ThreadsTable />
          {historyTips.map((tip, id) => {
            return <TipCard tip={tip} key={id} />;
          })} */}
      </tbody>
    </TableTemplate>
  );
};

const mapStateToProps = ({ historyTips }) => ({ historyTips });

AllTipsHistory.propTypes = {
  historyTips: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AllTipsHistory);
