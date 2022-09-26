
import React, { useState, useRef, useEffect } from 'react'
import { fetchData } from '../utils/fetchData'
import { Pagination, TextField } from '@mui/material';
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
  var changevalue = "Edit"
  // console.log(data, "outside");
  const dummyData = {
    title: "Title",
    tagline: "Tagline",
    note: "Empty Note"
  };
  const handleSearch = () => {
    const pinned = data.filter(item => item.pinned === "true")
    .sort((var1,var2)=>{
      var a = new Date(var1.updatedAt)
      var b = new Date(var2.updatedAt)
      return b - a;
    })
    const unpinned = data.filter(item => item.pinned === "false")
    .sort((var1,var2)=>{
      var a = new Date(var1.updatedAt)
      var b = new Date(var2.updatedAt)
      return b - a;
    })
    
    // .sort((var1,var2)=>{
    //   var a = new Date(var1);
    //   var b = new Date(var2);
    //   if (a > b) return 1; if (a < b) return -1; return 0;
    // });
    const allData = [...pinned, ...unpinned];
    // console.log("alldata", allData)
    return allData.filter((item) => (
      item.title?.toLowerCase().includes(search) ||
      item.tagline?.toLowerCase().includes(search) ||
      item.note?.toLowerCase().includes(search))
    )
  }

  const handlePin = (id, isPinned) => {
    console.log("pinn", isPinned)
    if(isPinned==="false"){
      PinData(id, "true")
      
    }
    if(isPinned==="true"){
      PinData(id, "false")
    }
    setTimeout(function () {
      window.location.reload();
    }, 1000)
  }



  // Delete function
  const handleClick = (id) => {
    console.log(id);
    DeleteNote(id);
    setTimeout(function () {
      window.location.reload();
    }, 1000)

  }

// console.log(handleSearch(), "well donw data");



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

        {(data) ? handleSearch()
        .slice((page - 1) * 6, (page - 1) * 6 + 6)
        .map((item) => <div className='notes-item'>
          <span className='title'>{item.title}</span> <hr />
          <span className='tagline'>{item.tagline}</span> <br />
          <textarea disabled cols="37" rows="13">{item.note}</textarea>
   
          <div className="options">
            <Modal changevalue={changevalue} Title={item.title} Tagline={item.tagline} Notes={item.note} id={item.id} />
            <button className='pin' onClick={() => handleClick(item._id)}><IconTrash /></button>
           {(item.pinned==="true")? <button ref={pin} className='pin pin-selected' onClick={() => handlePin(item._id, item.pinned)}><IconPin /></button>
           :<button ref={pin} className='pin' onClick={() => handlePin(item._id, item.pinned)}><IconPin /></button>}
          </div>
        </div>)
         :
          <div className='notes-item'>
            <span className='title'>{dummyData.title}</span> <hr />
            <span className='tagline'>{dummyData.tagline}</span>
            <p>{dummyData.note}</p>

          </div>
        }

        <div className='notes-item add'>
          +
          {/* <Modal className={['notes-item','add']} changevalue={"Create"} changetitle={"Create"}/> */}
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