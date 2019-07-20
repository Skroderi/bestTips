import React from "react";
import Table from "templates/Table";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";

const AllTips = ({ tips }) => {
  return (
    <div>
      <Table>
        <ThreadsTable />
        {tips.map((tip, id) => (
          <TipCard tip={tip} key={id} />
        ))}
      </Table>
    </div>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });
export default connect(mapStateToProps)(AllTips);
