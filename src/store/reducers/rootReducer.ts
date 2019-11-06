import { combineReducers } from "redux";
import simpleReducer from "./userReducer";
export default combineReducers({
  users: simpleReducer
});
