import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Note } from "./index";
import "../index.css";

const AllNotes = props => {
  const { isAuthenticated, user } = props.auth;
  const fetchItems = async () => {
    if (!isAuthenticated) return null;
    const { data } = await axios.get(
      "/api/notes",
      tokenConfig(props.auth.token)
    );

    setItems(data);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const [items, setItems] = useState([]);

  const onClosed = async (itemId, editorContent, editorTitle) => {
    if (editorContent.length || editorTitle.length) {
      if (itemId) {
        await axios.patch(
          `/api/notes/${itemId}`,
          {
            content: editorContent,
            title: editorTitle
          },
          tokenConfig(props.auth.token)
        );
      } else {
        await axios.post(
          "/api/notes",
          {
            content: editorContent,
            title: editorTitle
          },
          tokenConfig(props.auth.token)
        );
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
  if (!isAuthenticated) return null;
  return (
    <div className="AllNotes">
      <Note
        item={{
          title: ""
        }}
        onClosed={onClosed}
        buttonLabel={"create new"}
      />
      {items.map(item => (
        <Note item={item} onClosed={onClosed} buttonLabel={item.title} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const tokenConfig = token => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export default connect(mapStateToProps, null)(AllNotes);
