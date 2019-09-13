import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import tips from "./tips";
import user from "./user";
export default combineReducers({ alert, tips, auth, user });

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
