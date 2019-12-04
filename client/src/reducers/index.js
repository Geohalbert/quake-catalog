import { combineReducers } from "redux";

import { quakeReducers } from "./quakeReducers";

const rootReducer = combineReducers({
  quakeReducers
});

export default rootReducer;
