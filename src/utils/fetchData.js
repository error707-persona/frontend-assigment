import axios from "axios";
import React, { useEffect, useState } from "react";
// import { userData } from "../../backend/userData";

const fetchData = (current, x_attribute, y_attribute) => {
    const [data, setdata] = useState({
        title:"Title",
        tagline:"tagline",
        note:"Note"
    });
    useEffect(() => {
        let item = null;
        axios
            .get(`http://localhost:9000/Notes`)
            .then(res => {
                // item = res.data;
                console.log("item", res.data)
                setdata({
                    labels: res.data.map((item) => item._id),
                    datasets: [{
                        label: current,
                        data: res.data.map((item) => item.count),
                        backgroundColor: "#b3b3ff",
                        fill: true,
                        
                    }]
                });
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data, current)
    if (data) return data;
}

export { fetchData };