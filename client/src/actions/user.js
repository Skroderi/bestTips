import axios from "axios";
import { GET_USER } from "./types";

// get user
export const getUser = userName => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userName}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};
