import { GET_USER } from "../actions/types";

const initialState = { loading: true };
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        ...payload[0],
        loading: false
      };
    default:
      return state;
  }
}
