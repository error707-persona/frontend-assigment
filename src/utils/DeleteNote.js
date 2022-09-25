import axios from "axios";

const DeleteNote = (id) => {
        axios({
            method: 'post',
            url: `http://localhost:9023/delete/${id}`,
           
          }).then(res=>{
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
}

export { DeleteNote };