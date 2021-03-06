import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const StyledButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
export const StyledButton = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  margin: 35px 30px 0 0;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.red};
    transform: scale(1.1);
  }
`;
const Buttons = props => {
  const { id } = props;
  return (
    <StyledButtonsDiv>
      <StyledButton exact as={NavLink} to={`/tips/${id ? id : ""}`}>
        Incoming
      </StyledButton>
      <StyledButton as={NavLink} to={`/tips${id ? `/${id}` : ""}/history`}>
        History
      </StyledButton>
    </StyledButtonsDiv>
  );
};
export default Buttons;
