import axios from "axios";

const DeleteNote = (id) => {
        axios({
            method: 'post',
            url: `https://secure-bastion-81443.herokuapp.com/delete/${id}`,
           
          }).then(res=>{
            console.log("ok on frontend")
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
}

export { DeleteNote };