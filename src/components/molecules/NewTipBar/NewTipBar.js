import React from "react";
import styled from "styled-components";
import Select from "components/atoms/Select/Select";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/LoginButton";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 400px;
  height: 100vh;
  background-color: white;
  border-left: 10px solid black;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
`;
const Heading = styled.h3`
  font-size: 20px;
  margin: 15px 0px 5px 0px;
`;

const InnerTeamsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BetTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* margin: 0 auto; */
  /* width: 80%; */
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  margin: 0 20px;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  padding: 15px;
  margin: 30px;
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  color: #ecc500;
`;
const NewTipBar = () => {
  return (
    <StyledWrapper>
      <h1>ADD TIP</h1>
      <Heading>Category:</Heading>
      <Select required />
      <Heading>Opponents:</Heading>
      <InnerTeamsWrapper>
        <Input team /> <Paragraph> VS </Paragraph> <Input team />
      </InnerTeamsWrapper>
      <BetTypeWrapper>
        <Heading>Bet on:</Heading>
        <Input team />
        <Heading>Odd:</Heading>
        <Input odd type="number" min="1" />
      </BetTypeWrapper>
      <DateWrapper>
        <Heading>Date:</Heading>
        <Input type="date" date />
        <Heading>Time:</Heading>
        <Input hour />
      </DateWrapper>

      <StyledButton>ADD TIP</StyledButton>
    </StyledWrapper>
  );
};

export default NewTipBar;
