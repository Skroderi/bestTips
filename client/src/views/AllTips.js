import React from "react";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";

const AllTips = ({ tips }) => {
  return (
    // <TableTemplate>
    //   <tbody>
    //     <ThreadsTable />
    //     {tips.tips.map((tip, id) => (
    //       <TipCard tip={tip} key={id} />
    //     ))}
    //   </tbody>
    // </TableTemplate>
    <div>adasd</div>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });
export default connect(mapStateToProps)(AllTips);
