// import React from "react";
import { Editor } from "./index";
import "../index.css";

// const Note = () => {
//   return (
//     <div className="Note">
//       <Editor />
//     </div>
//   );
// };

// export default Note;

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

const Note = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const titleFont = {
    fontSize: "2rem"
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>{" "}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              {/* <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText> */}
            </InputGroupAddon>
            <Input style={titleFont} placeholder="TITLE" />
          </InputGroup>
        </ModalHeader>
        <ModalBody>
          <div className="Note">
            <Editor title={useState} />
          </div>{" "}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Note;
