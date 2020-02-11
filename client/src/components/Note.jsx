import { Editor } from "./index";
import "../index.css";
import { connect } from "react-redux";
import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Note = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const [editorTitle, setEditorTitle] = useState("");
  const toggle = () => setModal(!modal);
  console.log(props);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>{" "}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className="Note">
            <Editor
              title={useState}
              item={props.item}
              trackContent={setEditorContent}
              trackTitle={setEditorTitle}
            />
          </div>{" "}
        </ModalBody>
        <ModalFooter>
          {props.item._id && (
            <Button
              color="primary"
              onClick={() => {
                props.onDelete(props.item._id);
                toggle();
              }}
            >
              Delete
            </Button>
          )}
          <Button
            color="primary"
            onClick={() => {
              props.onClosed(props.item._id, editorContent, editorTitle);
              toggle();
            }}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

const tokenConfig = (token, data) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (data) {
    config.params = { id: data._id };
  }
  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
export default connect(mapStateToProps, null)(Note);
