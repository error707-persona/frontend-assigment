import axios from "axios";
import React, { useEffect, useState } from "react";
// import { userData } from "../../backend/userData";

const CreateNote = (title, tagline, note) => {
        if (title==="") title="Empty title"
        if (tagline=="") tagline="Empty tagline"
        if (note=="") tagline="Empty note"
    
        axios({
            method: 'post',
            url: 'http://localhost:9023/Notes',
            headers: {}, 
            data: {
             title:title, // This is the body part
             tagline:tagline,
             note:note
            }
          }).then(res=>{
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
     

    
}

export { CreateNote };