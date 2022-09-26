import axios from "axios";
import React, { useEffect, useState } from "react";


const EditData = (id, title, tagline, note) => {

    useEffect(() => {

        axios({
            method: 'post',
            url: `http://localhost:9023/edit/${id}`,
            headers: {},
            data: {

                title: title,
                tagline: tagline,
                note: note
            }
        }).then(res => {

            console.log("edit info", res.data)
            console.log(title, tagline, note, "all values")

        })
            .catch(err => {
                console.log(err);
            })
    }, [])
    // console.log(data)
    if (data) return data;
}

export { EditData };