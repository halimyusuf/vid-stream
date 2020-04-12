import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./AuthReducer";
import streamReducer from "./streamReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
