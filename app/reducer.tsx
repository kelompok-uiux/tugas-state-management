import { combineReducers } from "redux";

import colorReducer from "./reducer/colorReducer";
import exp from "constants";

const rootReducer = combineReducers({
  color: colorReducer,
})

export default rootReducer
