import React, { useState, useEffect } from 'react';
import { Note } from './index';
import '../index.css';


const AllNotes = () => {
	useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            '/api/notes'
        );
        
        const items = await data.json();
        console.log(items);
        setItems(items);
        }
	// const NoteSize = {
	// 	maxHeight: "40px",
	// 	maxWidth: "40px"
    //   };
    return (
		<div className="AllNotes">
			{items.map(item => (
			<Note />
			))}

		</div>
    );
}

export default AllNotes;