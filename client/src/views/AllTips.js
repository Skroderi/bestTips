import React, { Fragment, useEffect, useState } from "react";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import styled from "styled-components";
import { getTips } from "../actions/tip";

const Styledtbody = styled.tbody`
  width: 200px;
`;
const MainWrapper = styled.div`
  margin-top: 90px;
  width: 90vw;
  max-width: 800px;
  margin: 0 auto;
`;
const StyledSelect = styled.select`
  text-transform: uppercase;
  padding: 10px;
  margin: 5px;
  border: none;
  margin-top: 200px;
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
          {category === "all" ? (
            <Fragment>
              {tips.current.map((tip, id) => {
                return <TipCard tip={tip} key={id} />;
              })}
            </Fragment>
          ) : (
            <Fragment>
              {tips.current
                .filter(tip => tip.category === category)
                .map((tip, id) => {
                  return <TipCard tip={tip} key={id} />;
                })}
            </Fragment>
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
