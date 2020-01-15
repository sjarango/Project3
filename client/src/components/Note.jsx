import React from 'react';
import { Editor, Nav } from './index';
import '../index.css';


const Note = () => {
    return (
        <div>
            <Nav />
        <div className='Note'>
            <Editor />
        </div>
        </div>
    );
}

export default Note;