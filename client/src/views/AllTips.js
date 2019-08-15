import React from "react";
import Table from "templates/Table";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import MainTamplate from "../templates/MainTemplate";

const AllTips = ({ tips }) => {
  return (
    <div>
      <MainTamplate />
      <Table>
        <tbody>
          <ThreadsTable />
          {tips.tips.map((tip, id) => (
            <TipCard tip={tip} key={id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });
export default connect(mapStateToProps)(AllTips);
