import axios from "axios";

import {
  ADD_TIP,
  GET_TIPS,
  UPDATE_TIP,
  GET_USERTIPS,
  UPDATE_LIKES,
  UPDATE_UNLIKES
} from "./types";

export const addTip = tipContext => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/tip", tipContext, config);
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
    const res = await axios.get("/api/tip");

    dispatch({
      type: GET_TIPS,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const getUserTips = userName => async dispatch => {
  try {
    const res = await axios.get(`/api/tip/user/${userName}`);
    dispatch({
      type: GET_USERTIPS,
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
    const res = await axios.put(`/api/tip/${id}`, item);
    dispatch({
      type: UPDATE_TIP,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }

  getTips();
};

export const vote = (id, type) => async dispatch => {
  const action = {
    type
  };

  try {
    const res = await axios.put(`/api/tip/like/${id}`, action);
    if (type === "like") {
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: res.data }
      });
    } else {
      dispatch({
        type: UPDATE_UNLIKES,
        payload: { id, unLikes: res.data }
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// UnLike

export const unLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/tip/unlike/${id}`);
    dispatch({
      type: UPDATE_UNLIKES,
      payload: { id, unLikes: res.data }
    });
  } catch (err) {
    console.error(err);
  }
};
