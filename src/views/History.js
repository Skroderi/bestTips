import React from "react";
import PropTypes from "prop-types";
import Table from "templates/Table";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import MainTamplate from "../templates/MainTemplate";

const History = ({ historyTips, match }) => {
  return (
    <div>
      <MainTamplate id={match.params.id} />
      <Table>
        <tbody>
          <ThreadsTable />
          {historyTips
            .filter(tip => tip.category === match.params.id)
            .map((tip, id) => {
              return <TipCard tip={tip} key={id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = ({ historyTips }) => ({ historyTips });

History.propTypes = {
  historyTips: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(History);
