import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: false,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false
      };
    case LOGIN_SUCCESS:
      // Cookies.set("token", `Bearer ${payload.token}`);
      return {
        ...state,
        loading: true
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      // Cookies.remove("token");
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        user: null,
        loading: false
      };
    default:
      return state;
  }
}
