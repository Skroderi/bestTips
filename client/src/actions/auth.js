import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

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
    console.log(res.data);
    // setAlert("Account created, You can Log in now.", "succes");
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
