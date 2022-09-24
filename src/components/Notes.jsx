import React, {useState, useRef} from 'react'
import { fetchData } from '../utils/fetchData'
const Notes = () => {
 const data = fetchData();
 console.log(data, "outside");
 const dummyData = {
  title:"Title",
  tagline:"Tagline",
  note:"Empty Note"
};
  return (

    <div className="notes-container">
      {/* {(data)? data.map((item)=><div className='notes-item'>
        <span className='title'>{item.title}</span> <hr />
        <span className='tagline'>{item.tagline}</span>
        <p>{item.note}</p>
      </div>) :
      <div className='notes-item'>
      <span className='title'>{dummyData.title}</span> <hr />
      <span className='tagline'>{dummyData.tagline}</span>
      <p>{dummyData.note}</p>
    </div>
      } */}
      
      <div className='notes-item add'>
      +
      </div>
      
      
    </div>


  )
}

export default Notes