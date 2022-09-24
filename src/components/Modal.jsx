import React, { useState, useRef } from 'react'

const Modal = () => {
  const modal_container = useRef(null);
  const onHandleOpen = () => {
    modal_container.current.classList.add("show");
  }
  const OnHandleClose = () => {
    modal_container.current.classList.remove("show");
  }

  const OnHandleSave = () => {

  }
  return (
    <div>
      <button onClick={onHandleOpen} className="close">Add Notes</button>
      <div className='modal-container' ref={modal_container}>
        <div className="modal">
          <h1>Edit</h1>
          <input type="text" /> <br />
          <input type="text" /> <br />
          <textarea name="" id="" cols="30" rows="10"></textarea><br />
          <div className='modal-buttons'>
            <button onClickCapture={OnHandleSave} className="close">
              Save
            </button>
            <button onClickCapture={OnHandleClose} className="close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal