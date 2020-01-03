import { combineReducers } from "redux";

import { quakes } from "./quakeReducers";
import { alert } from "./alertReducers";

const rootReducer = combineReducers({
  quakes,
  alert
});

export default rootReducer;
