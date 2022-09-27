import React,{useState} from "react";
import NoteContext from "./NoteContext";
import fetchData from "../utils/fetchData";
const NoteState = (props) => {
    const [id, setid] = useState(second)
    return (
        <NoteContext.Provider value={{is, setid}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;