import axios from "axios";
import React, { useEffect, useState } from "react";


const EditData = (id, title, tagline, note) => {

        let data = null;
        console.log(id, title, tagline, note)
        axios({
            method: 'post',
            url: `https://secure-bastion-81443.herokuapp.com/edit/${id}`,
            headers: {},
            data: {

                title: title,
                tagline: tagline,
                note: note
            }
        }).then(res => {
            data = res.data;
            console.log("edit info", res.data)
            

        })
            .catch(err => {
                console.log(err);
            })
   
    // console.log(data)
    if (data) return data;
}

export { EditData };