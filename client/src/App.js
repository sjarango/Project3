import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { loadUser } from "./actions/authAction";
import { AppNavbar, AllNotes } from "./components";

import "./index.css";
import store from "./store";
function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />

          <AllNotes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
