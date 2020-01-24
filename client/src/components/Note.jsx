import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Editor, AppNavbar } from './index';
import '../index.css';


const Note = () => {

    const titleFont = {
        fontSize: "2rem"
      };
    return (
        <div>
        <div className='Note'>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          {/* <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText> */}
        </InputGroupAddon>
        <Input style={titleFont} placeholder="TITLE" />
      </InputGroup>
      <br></br>
            <Editor title={useState} />
        </div>

        </div>
    );
}

export default Note;
