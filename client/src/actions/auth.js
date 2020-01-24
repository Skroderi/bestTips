import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "./types";

// load user
export const loadUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/auth", { withCredentials: true });
    setTimeout(() => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }, 400);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// REGISTER USER
export const register = ({ newUser, loginAfterRegister }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "Application/json"
    }
  };
  const body = JSON.stringify(newUser);

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    loginAfterRegister();
    dispatch(setAlert("Account created, Sign in now!", "succes"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
    console.error(err.response.data);
  }
};

// LOGIN USER
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "Application/json"
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config, {
      withCredentials: true
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
    console.error(err.response.data);
  }
};

// LOGOUT / CLEAR PROFILE

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
