import React from "react";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const StyledInput = styled(Input)`
  margin: 12px 0px;
  width: 100%;
  max-width: 200px;
`;
const StyledErrorMessage = styled(ErrorMessage)`
  max-width: 90%;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
`;
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must have at least 5 characters")
    .required("Password is required")
});

const Login = ({ login, isAuthenticated }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        const { email, password } = values;
        login(email, password);
      }}
    >
      {({ handleChange, handleBlur }) => (
        <StyledForm autoComplete="off">
          <StyledInput
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            mail
          />
          <StyledErrorMessage name="email" component="div" />

          <StyledInput
            placeholder="Password"
            name="password"
            password
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <StyledErrorMessage name="password" component="div" />

          <LoginButton type="submit">Login</LoginButton>
        </StyledForm>
      )}
    </Formik>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
