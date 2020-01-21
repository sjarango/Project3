import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { loadUser } from "./actions/authAction";
import { Editor, Note, Nav, Main, NotFound } from "./components";
import "./index.css";
import store from "./store";
import Register from "./components/Register";
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
      <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/note" component={Note} />
            <Route path="*" component={NotFound} />
          </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
