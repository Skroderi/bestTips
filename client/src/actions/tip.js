import axios from "axios";

import { ADD_TIP, GET_TIPS, LOGOUT } from "./types";

export const addTip = tipContext => async dispatch => {
  console.log(tipContext);

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("api/tip", tipContext, config);
    dispatch({
      type: ADD_TIP,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

export const getTips = () => async dispatch => {
  try {
    const res = await axios.get("api/tip");
    dispatch({
      type: GET_TIPS,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

export const vote = (id, action) => {
  return {
    type: "VOTE",
    payload: { id: id, operation: action }
  };
};