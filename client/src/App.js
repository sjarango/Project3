import React, { useState, useMemo, useEffect } from "react";
import { Provider } from "react-redux";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { loadUser } from "./actions/authAction";
import { Note, AppNavbar, Main, AllNotes } from "./components";
import NotFound from "./components/404";
import "./index.css";
import store from "./store";
// import Register from "./components/Register";
function App(props) {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <Switch>
            {/* <Route path="/" exact component={Register} /> */}
            <Route path="/home" exact component={Main} />
            <Route path="/notes" component={Note} />
            <Route path="/404" component={NotFound} />
          </Switch>
          <AllNotes />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
