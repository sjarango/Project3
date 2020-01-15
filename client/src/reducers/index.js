import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const allReducers = combineReducers({
  auth: authReducer,
  error: errorReducer
});

export default allReducers;
