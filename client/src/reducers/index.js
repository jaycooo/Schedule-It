import { combineReducers } from "redux";
import User from "./userReducer.js";
import Event from "./eventReducer.js";

export default combineReducers({
    User,
    Event
});