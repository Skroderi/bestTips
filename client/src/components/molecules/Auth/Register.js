import React from "react";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";

const StyledInput = styled(Input)`
  margin: 12px 0px;
`;
const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-weight: bold;
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .required("name is required!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must have at least 5 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords don't match")
    .required("Password confirm is required")
});

const Register = ({ setAlert, loginAfterRegister, register }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        const { email, name, password } = values;
        const newUser = {
          name,
          email,
          password
        };

        console.log(newUser);
        register({ newUser, loginAfterRegister });

        //////////////////////////////// USER REGISTRATION ////////////////////////////
        // const { email, name, password } = values;
        // const newUser = {
        //   name,
        //   email,
        //   password
        // };
        // try {
        //   const config = {
        //     headers: {
        //       "Content-type": "Application/json"
        //     }
        //   };
        //   const body = JSON.stringify(newUser);

        //   const res = await axios.post("/api/users", body, config);
        //   console.log(res.data);
        // } catch (err) {
        //   console.error(err.response.data);
        // }
        ////////////////////////////////////////////////////////////////////////////////////

        // resetForm();
      }}
    >
      {({ handleChange, handleBlur }) => (
        <Form>
          <StyledInput
            placeholder="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <StyledErrorMessage name="name" component="div" />
          <StyledInput
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
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

          <StyledInput
            placeholder="Repeat password"
            name="passwordConfirm"
            password
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <StyledErrorMessage name="passwordConfirm" component="div" />

          <LoginButton type="submit">Register</LoginButton>
          <p>
            Already have an account? <a href="/">Sign In!</a>
          </p>
        </Form>
      )}
    </Formik>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Register);
