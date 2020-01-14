<<<<<<< HEAD
// import { combineReducers } from "redux";
// import errorReducer from "./errorReducer";
// import authReducer from "./authReducer";

// export default combineReducers({
//   error: errorReducer,
//   auth: authReducer
// });
=======
import counterReducer from './counter';
import loggedReducer from './isLogged'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;
>>>>>>> master
