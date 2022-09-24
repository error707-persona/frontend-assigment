import axios from "axios";
import React, { useEffect, useState } from "react";
// import { userData } from "../../backend/userData";

const EditData = () => {
    const [data, setdata] = useState([{
        title:"Title",
        tagline:"tagline",
        note:"Note"
    }]);
    useEffect(() => {
        let item = null;
        axios
            .get(`http://localhost:9023/`)
            .then(res => {
                // item = res.data;
                console.log("item", res.data)
                setdata(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data)
    if (data) return data;
}

export { EditData };