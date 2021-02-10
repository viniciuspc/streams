import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer"

export default combineReducers({
  auth: authReducer,
  // The key is required to be form
  form: formReducer,
  streams: streamReducer
});
