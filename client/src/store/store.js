import { createStore } from "redux";
import tipsApp from "reducers/reducers";
/* eslint-disable no-underscore-dangle */
export const store = createStore(
  tipsApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
