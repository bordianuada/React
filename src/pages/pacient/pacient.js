import React, { useState } from "react";
import { addPacient, updatePacient, pacienti } from "./../../slices/programSlice"
import { useSelector, useDispatch } from "react-redux";

export function Pacient(){

const [name, setName] = useState("");
const dispatch = useDispatch();
const allPacienti = useSelector(pacienti);


const add = () => {
    const data = {
        _id:"",
        name: name,
    };
    dispatch(addPacient(data));
    setName("");
}


return (
    <>
        <div className="container">
            {console.log(allPacienti)}
            <div className="form-group">
                <label>Adaugare Pacient</label>
                <input 
                className="form-control" 
                placeholder="Adaugare Pacient..." 
                onChange={(event) => setName(event.target.value)}
                 value={name} />
                <button className="btn btn-success" onClick={add}>Adaugare</button>
            </div>
        </div>

    </>
);
}
export default Pacient;