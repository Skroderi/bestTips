import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TipCard from "components/molecules/TipCard/TipCard";

const StyledTable = styled.table`
  width: 80%;
  max-width: 1000px;
  margin-top: 300px;
  border: 2px solid black;
  text-align: center;
  margin: 250px auto;
`;

const StyledTipCard = styled(TipCard)`
  &:nth-child(even) {
    background-color: grey;
  }
`;

const TableTemplate = ({ tips }) => {
  return (
    <StyledTable>
      <tr>
        <th>Category</th>
        <th>Match</th>
        <th>ODD</th>
        <th>Votes</th>
        <th>Author</th>
      </tr>
      {tips.map((tip, i) => (
        <TipCard tip={tip} key={i} />
      ))}
    </StyledTable>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });
export default connect(mapStateToProps)(TableTemplate);
