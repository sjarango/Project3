import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { increment, decrement } from "./actions";
import { Editor, Note, Nav, Main, Login } from "./components";
import "./index.css";
import NotFound from "./components/404";

function App(props) {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Main} />
      <Route path="/note" component={Note} />
      <Route path="/404" component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
