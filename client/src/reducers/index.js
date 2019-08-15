import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import tips from "./tips";
export default combineReducers({ alert, tips,auth });

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
