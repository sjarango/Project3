import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import { loadUser } from "./actions/authAction";
import { Editor, Note } from "./components";
import "./index.css";
import { store } from "./index";
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

  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <div className="App">
      {/* <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      {console.log(editor)};
      <Editable
        onKeyDown={event => {
          if (event.key === '&') {
            // Prevent the ampersand character from being inserted.
            event.preventDefault()
            // Execute a command to insert text when the event occurs.
            editor.insertText('and')
          }
        }}
      />
    </Slate> */}
      <Note>
        <Editor />
      </Note>
    </div>
  );
}

export default App;
