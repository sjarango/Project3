import React, { useState, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { increment, decrement } from './actions';
import { Editor, Note } from './components';
import './index.css';

function App(props) {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([    {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]);
  
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I should Only See While Logged in</h3> : ''}
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
