import React from "react";
import styled from "styled-components";

const StyledTr = styled.tr`
  background: ${({ theme }) => theme.colors.black};
  border: 30px solid black;
`;

const StyledTh = styled.th`
  padding: 20px;
  color: hsl(49, 100%, 58%);
`;

const Threads = () => {
  return (
    <StyledTr>
      <StyledTh>CATEGORY</StyledTh>
      <StyledTh>MATCH</StyledTh>
      <StyledTh>BET ON</StyledTh>
      <StyledTh>ODD</StyledTh>
      <StyledTh>VOTES</StyledTh>
      <StyledTh>AUTHOR</StyledTh>
    </StyledTr>
  );
};

export default Threads;
