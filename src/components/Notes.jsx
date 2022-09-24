import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react'
import { fetchData } from '../utils/fetchData'
import { Pagination } from '@mui/material';
import { DeleteNote } from '../utils/DeleteNote';
const Notes = () => {
 const data = fetchData();
 const [search, setsearch] = useState("");
 const [page, setpage] = useState(1);
 console.log(data, "outside");
 const dummyData = {
  title:"Title",
  tagline:"Tagline",
  note:"Empty Note"
};
const handleSearch = () => {
  return data.filter((item)=>(
      item.title.toLowerCase().includes(search) ||
      item.tagline.toLowerCase().includes(search) ||
      item.note.toLowerCase().includes(search) 
  ))
}



// modal
const handleClick = () => {

}


  return (
    <div className='notes-body'>
      
      <div className='container'>




    <input type="text" onChange={(e)=>setsearch(e.target.value)} className='searchbar' placeholder='Search notes' />
   
</div>
    <div className="notes-container">
      
      {(data)? handleSearch().slice((page-1)*10, (page-1)*10+10).map((item)=><div className='notes-item' onClick={handleClick(item.title, item.tagline, item.note)} onContextMenu={handleClick}>
        <span className='title'>{item.title}</span> <hr />
        <span className='tagline'>{item.tagline}</span>
        <p>{item.note}</p>
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
    <Pagination count={(handleSearch()?.length/10).toFixed(0)}
        style={{padding:20,
        width:"100%",
        display:"flex",
        justifyContent:"center",
        }}
        
        onChange={(_, value)=>{
            setpage(value);
            window.scroll(0,450);
        }}
        />
        
</div>

  )
}

export default Notes