import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "components/atoms/Button/LoginButton";
import Input from "components/atoms/Input/Input";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

const StyledInput = styled(Input)`
  margin: 12px 0px;
`;
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <form autoComplete="off" onSubmit={e => onSubmit(e)}>
      <StyledInput
        type="email"
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={e => onChange(e)}
        required
        mail
      />
      <StyledInput
        placeholder="password"
        type="password"
        name="password"
        value={password}
        onChange={e => onChange(e)}
        password
      />
      <LoginButton type="submit">LOGIN</LoginButton>
      <p>
        Don't have account yet? <a href="/">Register here!</a>
      </p>
    </form>
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
