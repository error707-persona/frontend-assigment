
import React, { useState, useRef, useEffect } from 'react'
import { fetchData } from '../utils/fetchData'
import { Pagination, Input, InputAdornment, OutlinedInput, TextField, Button } from '@mui/material';
import { DeleteNote } from '../utils/DeleteNote';
import { IconSearch, IconPin, IconTrash } from "@tabler/icons"
import Modal from './Modal';
import { PinData } from '../utils/PinData';
const Notes = () => {
  const data = fetchData();
  // const [click, setclick] = useState(0)
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const pin = useRef(null);
  // console.log(data, "outside");
  const dummyData = {
    title: "Title",
    tagline: "Tagline",
    note: "Empty Note"
  };
  const handleSearch = () => {
    const pinned = data.filter(item => item.pinned == "true");
    const unpinned = data.filter(item => item.pinned == "false");
    const allData = [...pinned, ...unpinned];
    console.log("alldata", allData)
    return allData.filter((item) => (
      item.title.toLowerCase().includes(search) ||
      item.tagline.toLowerCase().includes(search) ||
      item.note.toLowerCase().includes(search))
    )
  }

  const handlePin = (id) => {
    PinData(id);
    
  }



  // Delete function
  const handleClick = (id) => {
    console.log(id);
    DeleteNote(id);
    setTimeout(function () {
      window.location.reload();
    }, 1000)

  }





  return (
    <div className='notes-body'>
      <div className='container'>
        <TextField
          variant="standard" // <== changed this
          margin="normal"
          className='searchbar'
          autoFocus
          style={{ background: "#fff" }}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search Notes"
          InputProps={{
            startAdornment: <IconSearch />, // <== adjusted this
            disableUnderline: true, // <== added this
          }}
        />


      </div>
      <div className="notes-container">

        {(data) ? handleSearch().slice((page - 1) * 6, (page - 1) * 6 + 6).map((item) => <div className='notes-item'>
          <span className='title'>{item.title}</span> <hr />
          <span className='tagline'>{item.tagline}</span>
          <p>{item.note}</p>


          <div className="options">
            <Modal changevalue={"Edit"} changetitle={"Edit"} />
            <button className='pin' onClick={() => handleClick(item._id)}><IconTrash /></button>
           {(item.pinned==="true")? <button ref={pin} className='pin pin-selected' onClick={() => handlePin(item._id)}><IconPin /></button>
           :<button ref={pin} className='pin' onClick={() => handlePin(item._id)}><IconPin /></button>}
          </div>

        </div>) :
          <div className='notes-item'>
            <span className='title'>{dummyData.title}</span> <hr />
            <span className='tagline'>{dummyData.tagline}</span>
            <p>{dummyData.note}</p>

          </div>
        }

        <div className='notes-item add'>
          +
        </div>


      </div>
      <Pagination count={Math.ceil(handleSearch().length / 6).toFixed(0)}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}

        onChange={(_, value) => {
          setpage(value);
          window.scroll(0, 100);
        }}
      />

    </div>

  )
}

export default Notes