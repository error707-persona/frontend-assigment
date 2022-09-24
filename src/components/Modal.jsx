import React, { useState, useRef } from 'react'
import { CreateNote } from '../utils/CreateNote';


const Modal = (seen) => {
  const modal_container = useRef(null);

  const title = useRef(null);
  const tagline = useRef(null);
  const note = useRef(null);
  const handleOpen = () => {
    modal_container.current.classList.add("show");
  }
  const handleClose = () => {
    modal_container.current.classList.remove("show");
  }
  
  const handleSave = () => {
   
    modal_container.current.classList.remove("show");
    CreateNote(title.current.value, tagline.current.value, note.current.value);
  }
  return (
    <div>
      <button onClick={handleOpen} className="close" id="close">Add Notes</button>
      <div className='modal-container' ref={modal_container}>
        <div className="modal">
          <h1>Create</h1>
          <input type="text" ref={title} placeholder='Enter title'/> <br />
          <input type="text" ref={tagline} placeholder='Enter tagline'/> <br />
          <textarea ref={note} placeholder='Enter note here' cols="30" rows="10"></textarea><br />
          <div className='modal-buttons'>
            <button onClickCapture={handleSave} className="close">
              Save
            </button>
            <button onClickCapture={handleClose} className="close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal