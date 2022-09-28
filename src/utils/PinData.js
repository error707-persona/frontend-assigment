import axios from "axios";
import React, { useEffect, useState } from "react";
// import { userData } from "../../backend/userData";

const PinData = (id, isPinned) => {
        // if (title==="") title="Empty title"
        // if (tagline=="") tagline="Empty tagline"
        // if (note=="") tagline="Empty note"
        
        axios({
            method: 'post',
            url: `https://secure-bastion-81443.herokuapp.com/pin/${id}`,
            headers: {}, 
            data:{
                
                isPinned:isPinned
            }
          }).then(res=>{
            // console.log(isPinned, "pinned");
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
     

    
}

export { PinData };