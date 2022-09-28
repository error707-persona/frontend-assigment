import axios from "axios";
import React, { useEffect, useState } from "react";
// import { userData } from "../../backend/userData";

const fetchData = () => {
    const [data, setdata] = useState([{
        title:"Title",
        tagline:"tagline",
        note:"Note"
    }]);
    useEffect(() => {
        let item = null;
        axios
            .get(`https://secure-bastion-81443.herokuapp.com/`)
            .then(res => {
                // item = res.data;
                // console.log("item", res.data)
                setdata(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    // console.log(data)
    if (data) return data;
}

export { fetchData };