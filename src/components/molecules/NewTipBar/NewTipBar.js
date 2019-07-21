import React from "react";
import styled from "styled-components";
import Select from "components/atoms/Select/Select";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/LoginButton";
import { connect } from "react-redux";
import { addTip } from "actions/actions";
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

const StyledSelect = styled(Field)`
  margin: 0 auto;
  width: 200px;
  height: 30px;
  background-color: hsl(0, 0%, 96%);
`;

const SignupSchema = Yup.object().shape({
  category: Yup.string().required("Category is required!"),
  firstTeam: Yup.string().required("Required"),
  secondTeam: Yup.string().required("Required"),
  betOn: Yup.string().required("Required"),
  odd: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  time: Yup.string().required("Required")
});
const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-weight: bold;
`;

const NewTipBar = ({ isActive, addTip }) => {
  return (
    <Formik
      initialValues={{
        category: "football",
        firstTeam: "",
        secondTeam: "",
        betOn: "",
        odd: "",
        date: "",
        time: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
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
              <option value="tenis">Tenis</option>
              <option value="hockey">Hockey</option>
            </StyledSelect>
            <Heading>Opponents:</Heading>
            <InnerTeamsWrapper>
              <Field name="firstTeam" />
              <Paragraph> VS </Paragraph>
              <Field name="secondTeam" />
            </InnerTeamsWrapper>
            <StyledErrorMessage name="firstTeam" component="div" />
            <StyledErrorMessage name="secondTeam" component="div" />
            <BetTypeWrapper>
              <Heading>Bet on:</Heading>
              <Field type="betOn" name="betOn" />
              <StyledErrorMessage name="betOn" component="div" />
              <Heading>Odd:</Heading>
              <Field odd min="1" type="odd" name="odd" />
              <StyledErrorMessage name="odd" component="div" />
            </BetTypeWrapper>
            <DateWrapper>
              <Heading>Date:</Heading>
              <Field date type="date" name="date" />
              <StyledErrorMessage name="date" component="div" />
              <Heading>Time:</Heading>
              <Field hour type="time" name="time" />
              <StyledErrorMessage name="time" component="div" />
            </DateWrapper>

            <StyledButton
              type="submit"

              // onClick={() =>
              //   addTip({
              //     category: "football",
              //     firstTeam: "barca",
              //     secondTeam: "betis",
              //     odd: "3.5",
              //     author: "lolololek"
              //   })
              // }
            >
              ADD TIP
            </StyledButton>
          </StyledWrapper>
        </Form>
      )}
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
