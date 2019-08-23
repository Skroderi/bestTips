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

const ThreadsTable = () => {
  return (
    <StyledTr>
      <MediaQuery query="(max-device-width: 500px)">
        <StyledTh style={{ width: "50px" }} />
        <StyledTh>MATCH</StyledTh>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 501px)">
        <StyledTh>CATEGORY</StyledTh>
        <StyledTh>MATCH</StyledTh>
        <StyledTh>BET ON</StyledTh>
        <StyledTh>ODD</StyledTh>
        <StyledTh>VOTES</StyledTh>
        <StyledTh>AUTHOR</StyledTh>
      </MediaQuery>
    </StyledTr>
  );
};

export default ThreadsTable;
