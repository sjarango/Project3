// import axios from "axios";

// import { returnErrors } from "./errorAction";

// import {
//   USER_LOADED,
//   AUTH_ERROR,
//   USER_LOADING,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT_SUCCESS,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL
// } from "./types";

// //Check token & load user
// export const loadUser = () => (dispacth, getState) => {
//   //User loading
//   dispacth({ type: USER_LOADING });

//   //Get token from local storage
//   const token = getState().auth.token;

//   //Headers
//   const config = {
//     headers: {
//       "Content-type": "application/json"
//     }
//   };

//   //If token, add to header
//   if (token) {
//     config.headers["x-auth-token"] = token;
//   }
//   axios
//     .get("/api/auth/user", config)
//     .then(res =>
//       dispacth({
//         type: USER_LOADED,
//         payload: res.data
//       })
//     )
//     .catch(e => {
//       dispacth(returnErrors(err.response.data, err.response.status));
//       dispacth({
//         type: AUTH_ERROR
//       });
//     });
// };
