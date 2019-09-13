import React from "react";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";

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
  name: Yup.string()
    .min(3, "Too Short!")
    .required("Name is required!"),
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

const Register = ({ setAlert, loginAfterRegister, register, switchFunc }) => {
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
        <StyledForm autoComplete="off">
          <StyledInput
            placeholder="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            sign
          />
          <StyledErrorMessage name="name" component="div" />
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
        </StyledForm>
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
