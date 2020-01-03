import { combineReducers } from "redux";

import { creation } from "./createReducers";
import { quakes } from "./quakeReducers";
import { alert } from "./alertReducers";

const rootReducer = combineReducers({
  quakes,
  creation,
  alert
});

export default rootReducer;
