import React, { useState, useEffect } from "react";
import {doRegister, reqRegisterData, clearRegisterData } from "./../../slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";


function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm_password, setCondirmPassword] = useState();
    const [isValid, setIsValid]= useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const registerResponse = useSelector(reqRegisterData);

    useEffect(()=>{

        if(registerResponse && registerResponse._id){
            history.push("/login");
            dispatch(clearRegisterData());
        }
        setIsValid( !(name&&email&&password&&confirm_password))
    },[registerResponse, name, email, password, confirm_password])

    const register = () => {
        console.log(name, email, password, confirm_password);

        const data = {
            name,
            email,
            passwords:{
                password,
                confirm_password

            }
        }
        console.log(data);
    
        dispatch(doRegister(data));
    };


    return (
        <>
            <h1>REGISTER</h1>
            {
               isValid && (<div className="alert alert-danger"> Formul nu este valid </div>)
            }
            <input type="text" className="form-control" placeholder="Name..." onChange={(event) => setName(event.target.value)} value={name} />
            <input type="text" className="form-control" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} value={email} />
            <input type="password" className="form-control" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} value={password} />
            <input type="password" className="form-control" placeholder="Confirm Password..." onChange={(event) => setCondirmPassword(event.target.value)} value={confirm_password} />

            <button className="btn btn-success" disabled={ isValid } onClick={register} >Register</button>
        </>
    );
}

export default Register;