import React, { useState, useEffect } from "react";
import axios from "axios";
import { Note } from "./index";
import "../index.css";

const AllNotes = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api/notes");

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  const onClosed = async (itemId, editorContent, editorTitle) => {
      if (editorContent.length || editorTitle.length){
        if (itemId) {
            await axios.patch(`/api/notes/${itemId}`, {
                 content: editorContent,
                 title: editorTitle
               });
           } else {
         await axios.post("/api/notes", {
             content: editorContent,
             title: editorTitle
           });
         }
      }


    const data = await fetch(`/api/notes/${itemId}`);

    const item = await data.json();
    setItems(
      items.map(i => {
        if (i._id === itemId) {
          return item;
        } else {
          return i;
        }
      })
    );
  };
  // const NoteSize = {
  // 	maxHeight: "40px",
  // 	maxWidth: "40px"
  //   };
  return (
    <div className="AllNotes">
      {items.map(item => (
        <Note item={item} onClosed={onClosed} />
      ))}
    </div>
  );
};

export default AllNotes;
