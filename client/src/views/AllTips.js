import React, { useEffect } from "react";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import styled from "styled-components";
import { getTips } from "../actions/tip";
const Styledtbody = styled.tbody`
  width: 200px;
`;

const AllTips = ({ getTips, tips }) => {
  useEffect(() => {
    getTips();
  }, []);
  return (
    <TableTemplate>
      <Styledtbody>
        <ThreadsTable />
        {tips.current.map((tip, id) => (
          <TipCard tip={tip} key={id} />
        ))}
      </Styledtbody>
    </TableTemplate>
  );
};
const mapStateToProps = state => ({
  tips: state.tips
});
export default connect(
  mapStateToProps,
  { getTips }
)(AllTips);
