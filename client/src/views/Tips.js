import React, { Fragment, useEffect, useState } from "react";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import ThreadsTable from "templates/ThreadsTable";
import styled from "styled-components";
import { getTips } from "../actions/tip";
import History from "./History";
import Incoming from "./Incoming";

const Styledtbody = styled.tbody`
  width: 200px;
`;
const MainWrapper = styled.div`
  width: 90vw;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  max-width: 670px;
`;
const StyledSelect = styled.select`
  text-transform: uppercase;
  padding: 10px;
  margin: 5px;
  border: none;
  background-color: white;
  border: 2px solid black;
`;

const AllTips = ({ getTips, tips }) => {
  const [filterValues, setFilterValues] = useState({
    status: "incoming",
    category: "all"
  });
  const { status, category } = filterValues;

  const onChange = e =>
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });

  useEffect(() => {
    getTips();
  }, []);
  console.log();

  return (
    <MainWrapper>
      <StyledSelect value={status} name="status" onChange={e => onChange(e)}>
        <option value="incoming" defaultValue>
          Incoming
        </option>
        <option value="history">History</option>
      </StyledSelect>
      <StyledSelect
        value={category}
        name="category"
        onChange={e => onChange(e)}
      >
        <option value="all" defaultValue>
          All
        </option>
        <option value="football">Football</option>
        <option value="tennis">Tennis</option>
        <option value="hockey">Hockey</option>
      </StyledSelect>
      <TableTemplate>
        <Styledtbody>
          <ThreadsTable />
          {status === "incoming" ? (
            <Incoming tips={tips} category={category} />
          ) : (
            <History tips={tips} category={category} />
          )}
        </Styledtbody>
      </TableTemplate>
    </MainWrapper>
  );
};
const mapStateToProps = state => ({
  tips: state.tips
});
export default connect(
  mapStateToProps,
  { getTips }
)(AllTips);
