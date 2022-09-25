import axios from "axios";

const PinData = (id) => {
        axios({
            method: 'post',
            url: `http://localhost:9023/pin/${id}`,
          }).then(res=>{
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
}

export { PinData };