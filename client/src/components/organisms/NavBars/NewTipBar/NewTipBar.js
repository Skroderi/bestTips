import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/atoms/Button/LoginButton";
import { connect } from "react-redux";
import { addTip } from "actions/tip";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "components/atoms/Input/Input";

const StyledWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.topNavHeight};
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100vw;
  height: calc(100% - 70px);
  padding: 10px;
  background-color: white;
  font-weight: ${({ theme }) => theme.bold};
  border-left: 10px solid black;
  box-shadow: -20px 0 25px rgba(0, 0, 0, 0.3);
  transform: translate(${({ isActive }) => (isActive ? "0%" : "120%")});
  transition: transform 0.25s ease-in;
  overflow-y: auto;
  ${({ theme }) => theme.media.tablet} {
    width: 350px;
  }
`;
const MainHeading = styled.p`
  font-size: 18px;
  margin: 15px 0px 5px 0px;
`;

const Heading = styled.p`
  font-size: 12x;
  margin: 10px 0px 5px 0px;
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
  padding: 12px;
  margin: 20px;
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
  max-width: 90%;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
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
const NewTipBar = ({
  isActive,
  addTip,
  handleNewTipBarToggle,
  auth: { user }
}) => {
  const minDate = new Date().toISOString().slice(0, 10);

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
        votes: {
          likes: [],
          unLikes: []
        },
        author: user.name,
        probability: "",
        status: "pending",
        current: true
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        addTip(values);
        handleNewTipBarToggle();
        resetForm();
      }}
    >
      {({ handleChange, handleBlur }) => (
        <StyledWrapper isActive={isActive}>
          <Form>
            <MainHeading>ADD TIP</MainHeading>
            <Heading>Category:</Heading>
            <StyledSelect component="select" name="category">
              <option value="football" defaultValue>
                Football
              </option>
              <option value="tennis">Tennis</option>
              <option value="hockey">Hockey</option>
            </StyledSelect>
            <Heading>Opponents:</Heading>
            <InnerTeamsWrapper>
              <StyledDiv>
                <Input
                  name="firstTeam"
                  type="text"
                  team
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledErrorMessage name="firstTeam" component="div" />
              </StyledDiv>
              <Paragraph> VS </Paragraph>
              <StyledDiv>
                <Input
                  name="secondTeam"
                  type="text"
                  team
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledErrorMessage name="secondTeam" component="div" />
              </StyledDiv>
            </InnerTeamsWrapper>
            <BetTypeWrapper>
              <Heading>Bet on:</Heading>
              <Input
                name="betOn"
                type="text"
                bet
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <StyledErrorMessage name="betOn" component="div" />
              <Heading>Odd:</Heading>
              <Input
                min="1"
                step="0.1"
                type="number"
                name="odd"
                onChange={handleChange}
                onBlur={handleBlur}
                odd
              />
              <StyledErrorMessage name="odd" component="div" />
            </BetTypeWrapper>

            <DateWrapper>
              <Heading>Date:</Heading>
              <Input
                type="date"
                name="date"
                min={minDate}
                datediv
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <StyledErrorMessage name="date" component="div" />
              <Heading>Time:</Heading>
              <Input
                type="time"
                name="time"
                time
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <StyledErrorMessage name="time" component="div" />
            </DateWrapper>
            <StyledButton type="submit">ADD TIP</StyledButton>
          </Form>
        </StyledWrapper>
      )}
    </Formik>
  );
};
const mapDispatchToProps = dispatch => ({
  addTip: values => dispatch(addTip(values))
});

const mapStateToProps = state => ({
  auth: state.auth
});

NewTipBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  addTip: PropTypes.func.isRequired,
  handleNewTipBarToggle: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTipBar);
