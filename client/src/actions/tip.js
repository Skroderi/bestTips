import axios from "axios";

import { ADD_TIP } from "./types";

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
    console.log("asdsa");
  }
};

export const vote = (id, action) => {
  return {
    type: "VOTE",
    payload: { id: id, operation: action }
  };
};
