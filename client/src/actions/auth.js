import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "./types";
import setAuthToken from "../utlis/setAuthToken";

// load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
// REGISTER USER
export const register = ({ newUser, loginAfterRegister }) => async dispatch => {
  // console.log(props);

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
    dispatch(loadUser());
    console.log(res.data);
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
  // console.log(props);

  const config = {
    headers: {
      "Content-type": "Application/json"
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    console.log(res.data);
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
