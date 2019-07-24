import React from "react";
import styled, { css } from "styled-components";
import Select from "components/atoms/Select/Select";
import Button from "components/atoms/Button/LoginButton";
import { connect } from "react-redux";
import { addTip } from "actions/actions";
import lockIcon from "assets/icons/lock.svg";
import signInIcon from "assets/icons/sign.svg";
import calendar from "assets/icons/calendar.svg";
import clock from "assets/icons/clock.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  display: block;
`;

const Paragraph = styled.p`
  margin: 0 20px;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  padding: 15px;
  margin: 30px;
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  color: hsl(49, 100%, 58%);
`;

const StyledSelect = styled(Field)`
  margin: 0 auto;
  width: 200px;
  height: 30px;
  background-color: hsl(0, 0%, 96%);
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-weight: bold;
`;

const Input = styled(Field)`
  display: block;
  width: 240px;
  padding: 15px 30px;
  background-image: url(${signInIcon});
  background-size: 17px 17px;
  background-position: 4% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: none;
  text-indent: 20px;
  background-color: hsl(0,0%,96%);
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  ${props =>
    props.password &&
    css`
      background-image: url(${lockIcon});
    `}

  ${props =>
    props.team &&
    css`
      width: 120px;
      padding: 8px 8px;
      border-radius: 0px;
      background-image: none;
      text-indent: 0px;
    `}

    ${props =>
      props.odd &&
      css`
        width: 100px;
        padding: 8px 8px;
        border-radius: 0px;
        background-image: none;
        text-indent: 0px;
      `}

      ${props =>
        props.betOn &&
        css`
          width: 100px;
          padding: 8px 8px;
          border-radius: 0px;
          background-image: none;
          text-indent: 0px;
        `}
    ${props =>
      props.date &&
      css`
        width: 160px;
        padding: 8px 8px;
        border-radius: 0px;
        background-image: url(${calendar});
        background-size: 20px;
        text-indent: 20px;
      `}
      ${props =>
        props.time &&
        css`
          width: 110px;
          padding: 8px 0px;
          border-radius: 0px;
          background-image: url(${clock});
          background-size: 20px;
          text-indent: 20px;
        `}
`;

const SignupSchema = Yup.object().shape({
  category: Yup.string().required("Category is required!"),
  firstTeam: Yup.string().required("Required"),
  secondTeam: Yup.string().required("Required"),
  betOn: Yup.string().required("Required"),
  odd: Yup.number().required("Required"),
  date: Yup.date().required("Required"),
  time: Yup.string().required("Required")
});
const NewTipBar = ({ isActive, addTip, handleNewTipBarToggle }) => {
  return (
    <Formik
      initialValues={{
        category: "football",
        firstTeam: "",
        secondTeam: "",
        betOn: "",
        odd: "",
        date: "",
        time: "",
        likes: 0,
        unLikes: 0,
        author: "random",
        probability: "no votes"
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        addTip(values);
        handleNewTipBarToggle();
        resetForm();
      }}
    >
      <Form>
        <StyledWrapper isActive={isActive}>
          <h1>ADD TIP</h1>
          <Heading>Category:</Heading>
          <StyledSelect
            component="select"
            name="category"
            placeholder="Favorite Color"
          >
            <option value="football" selected>
              Football
            </option>
            <option value="tennis">Tennis</option>
            <option value="hockey">Hockey</option>
          </StyledSelect>
          <Heading>Opponents:</Heading>
          <InnerTeamsWrapper>
            <StyledDiv>
              <Input name="firstTeam" type="text" team />
              <StyledErrorMessage name="firstTeam" component="div" />
            </StyledDiv>
            <Paragraph> VS </Paragraph>
            <StyledDiv>
              <Input name="secondTeam" type="text" team />
              <StyledErrorMessage name="secondTeam" component="div" />
            </StyledDiv>
          </InnerTeamsWrapper>
          <BetTypeWrapper>
            <Heading>Bet on:</Heading>
            <Input type="betOn" name="betOn" type="text" betOn />
            <StyledErrorMessage name="betOn" component="div" />
            <Heading>Odd:</Heading>
            <Input
              odd
              min="1"
              step="0.1"
              type="odd"
              type="number"
              name="odd"
              odd
            />
            <StyledErrorMessage name="odd" component="div" />
          </BetTypeWrapper>
          <DateWrapper>
            <Heading>Date:</Heading>
            <Input date type="date" name="date" date />
            <StyledErrorMessage name="date" component="div" />
            <Heading>Time:</Heading>
            <Input hour type="time" name="time" time />
            <StyledErrorMessage name="time" component="div" />
          </DateWrapper>
          <StyledButton type="submit">ADD TIP</StyledButton>
        </StyledWrapper>
      </Form>
    </Formik>
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
