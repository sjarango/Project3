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

      fetchItems();
    }
  };

  const onDelete = (id) => {
    axios.delete(
      `/api/notes/${id}`,
      tokenConfig(props.auth.token)
    ).then(() => fetchItems());
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
        <Note 
        key={item._id}
        item={item} 
        onClosed={onClosed}
        onDelete={onDelete}
        buttonLabel={item.title} 
        />
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
