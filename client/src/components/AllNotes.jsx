import React from 'react';
import { Note } from './index';
import '../index.css';


const AllNotes = () => {
	const NoteSize = {
		maxHeight: "40px",
		maxWidth: "40px"
      };
    return (
		<div className="AllNotes">
			<Note style={NoteSize}/>
		</div>
    );
}

export default AllNotes;