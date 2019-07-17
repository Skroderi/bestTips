import { createStore } from "redux";
import tipsApp from "reducers/reducers";

export const store = createStore(tipsApp);

export default store;
