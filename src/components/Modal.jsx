import React, { useState, useRef } from 'react'
import { CreateNote } from '../utils/CreateNote';
import { EditData } from '../utils/EditData';
// import NoteContext from '../context/NoteContext';
// import { useContext } from 'react';
const Modal = ({changevalue, Title, Tagline, Notes, id}) => {
  const modal_container = useRef(null);
  const title = useRef(null);
  const tagline = useRef(null);
  const note = useRef(null);
  // const {changeTitle, changeTagline, changeNote, setchangeTitle, setchangeTagline, setchangeNote} = useContext(NoteContext); 
  const [changeTitle, setchangeTitle] = useState(Title)
  const [changeTagline, setchangeTagline] = useState(Tagline)
  const [changeNote, setchangeNote] = useState(Notes)
  const handleOpen = () => {
    modal_container.current.classList.add("show");
   
  }
  const handleClose = () => {
    modal_container.current.classList.remove("show");
  }
 
  const handleSave = () => {
    // console.log(changevalue)
    modal_container.current.classList.remove("show");
    
    if (!changevalue){
      CreateNote(title.current.value, tagline.current.value, note.current.value);
    } else{
      EditData(id, title.current.value, tagline.current.value, note.current.value)
    }

      setTimeout(function () {
        window.location.reload();
      }, 1000)
    
  }
  return (
    <div>
      <button onClick={handleOpen} className="close" id="close">{(changevalue)?changevalue:"+"}</button>
      <div className='modal-container' ref={modal_container}>
        <div className="modal">
          <h1>{(changevalue)?changevalue:"Create"}</h1>
          <input type="text" ref={title} placeholder='Enter title' value={changeTitle} onChange={(e)=>setchangeTitle(e.target.value)}/> <br />
          
          <input type="text" ref={tagline} placeholder='Enter tagline' value={changeTagline} onChange={(e)=>setchangeTagline(e.target.value)}/> <br />
          <textarea ref={note} placeholder='Enter note here' cols="30" rows="10" value={changeNote} onChange={(e)=>setchangeNote(e.target.value)}></textarea><br />
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