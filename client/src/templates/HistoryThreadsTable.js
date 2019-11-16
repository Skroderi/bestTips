import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const StyledTr = styled.tr`
  background: ${({ theme }) => theme.colors.black};
  border: 30px solid black;
`;

const StyledTh = styled.th`
  font-size: 12px;
  padding: 10px;
  color: hsl(49, 100%, 58%);
`;

const HistoryThreadsTable = () => {
  return (
    <StyledTr>
      <MediaQuery query="(max-device-width: 500px)">
        <StyledTh />
        <StyledTh>EVENT</StyledTh>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 501px)">
        <StyledTh>CATEGORY</StyledTh>
        <StyledTh>EVENT</StyledTh>
        <StyledTh>BET ON</StyledTh>
        <StyledTh>ODD</StyledTh>
        <StyledTh>AUTHOR</StyledTh>
      </MediaQuery>
    </StyledTr>
  );
};

export default HistoryThreadsTable;
