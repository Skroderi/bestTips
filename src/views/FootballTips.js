import React from "react";
import Table from "templates/Table";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import MainTamplate from "../templates/MainTemplate";

const FootballTips = ({ tips }) => {
  // tips.
  return (
    <div>
      <MainTamplate />
      <Table>
        <ThreadsTable />
        {tips.map((tip, id) => {
          if (tip.category === "football")
            return <TipCard tip={tip} key={id} />;
        })}
      </Table>
    </div>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });
export default connect(mapStateToProps)(FootballTips);