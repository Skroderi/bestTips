import React from "react";
import styled from "styled-components";
import Select from "components/atoms/Select/Select";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/LoginButton";
import { connect } from "react-redux";
import { addTip } from "actions/actions";

const StyledWrapper = styled.div`
  position: fixed;
  top: 130px;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 400px;
  height: 100vh;
  background-color: white;
  border-left: 10px solid black;
  box-shadow: -20px 0 25px rgba(0, 0, 0, 0.3);
  transform: translate(${({ isActive }) => (isActive ? "0%" : "120%")});
  transition: transform 0.25s ease-in-out;
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
const NewTipBar = (
  { isActive, addTip },
  category,
  firstTeam,
  secondTeam,
  odd,
  author
) => {
  return (
    <StyledWrapper isActive={isActive}>
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

      <StyledButton
        onClick={() =>
          addTip({
            category: "football",
            firstTeam: "barca",
            secondTeam: "betis",
            odd: "3.5",
            author: "lolololek"
          })
        }
      >
        ADD TIP
      </StyledButton>
    </StyledWrapper>
  );
};
const mapDispatchToProps = dispatch => ({
  addTip: (category, firstTeam, secondTeam, odd, author) =>
    dispatch(addTip(category, firstTeam, secondTeam, odd, author))
});
export default connect(
  null,
  mapDispatchToProps
)(NewTipBar);
