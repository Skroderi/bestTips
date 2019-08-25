import React from "react";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import styled from "styled-components";

const Styledtbody = styled.tbody`
  width: 200px;
`;

const AllTips = ({ tips }) => {
  return (
    <TableTemplate>
      <Styledtbody>
        <ThreadsTable />
        {/* {tips.current.map((tip, id) => (
          <TipCard tip={tip} key={id} />
        ))} */}
      </Styledtbody>
    </TableTemplate>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });
export default connect(mapStateToProps)(AllTips);
