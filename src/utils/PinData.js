import axios from "axios";
import React, { useEffect, useState } from "react";
// import { userData } from "../../backend/userData";

const PinData = (id) => {
        // if (title==="") title="Empty title"
        // if (tagline=="") tagline="Empty tagline"
        // if (note=="") tagline="Empty note"
    
        axios({
            method: 'post',
            url: `http://localhost:9023/pin/${id}`,
            headers: {}, 
            
          }).then(res=>{
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
     

    
}

export { PinData };