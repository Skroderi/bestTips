import axios from "axios";

import { ADD_TIP, GET_TIPS, LOGOUT, UPDATE_TIP } from "./types";

export const addTip = tipContext => async dispatch => {
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
  } catch (err) {
    console.error(err);
  }
};

export const updateTip = (id, status) => async dispatch => {
  const item = {
    status: status
  };
  try {
    const res = await axios.put(`api/tip/${id}`, item);
    console.log(res.data);
    console.log(status);
    // console.log(status);
    dispatch({
      type: UPDATE_TIP
    });
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
