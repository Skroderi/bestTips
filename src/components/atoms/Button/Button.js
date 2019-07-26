import styled from "styled-components";

export const StyledButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
export const StyledButton = styled.button`
  padding: 20px 30px;
  font-size: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background-color: hsl(53, 100%, 50%);
  margin: 0 5px;

  &.active {
    background-color: grey;
  }
`;
