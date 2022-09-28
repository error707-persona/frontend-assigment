import axios from "axios";

const DeleteNote = (id) => {
        axios({
            method: 'post',
            url: `https://secure-bastion-81443.herokuapp.com/${id}`,
           
          }).then(res=>{
            console.log("res post", res.data);
          }).catch(err=>{
            console.log("error in request", err);
          });
}

export { DeleteNote };