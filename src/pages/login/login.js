import React, { useState, useEffect } from "react";
import {doLogin, reqLoginError, reqLoggedIn} from "./../../slices/userSlice";
import {useDispatch, useSelector} from "react-redux";

function Login() {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [isNotValid, setIsNotValid]=useState(false);
    const [serverError, setServerError]=useState(false);
    const serverErrorSelector = useSelector(reqLoginError);
    const serverIsLoggedIn = useSelector(reqLoggedIn);

    const dispatch = useDispatch();
    const login=()=>{
        const data = {
            email,
            password
        }
        dispatch(doLogin(data));
    };

    useEffect(() => {
        setServerError(serverErrorSelector)
        setIsNotValid(!(email && password));

        if(serverIsLoggedIn){
            console.log('Redirect...');
        }

    }, [email, password, serverErrorSelector, serverIsLoggedIn]);

  return (
    <>
      <h1>LOGIN</h1>
      {
          isNotValid && (<div className="alert alert-danger">Toate campurile sunt obligatorii</div>)
      }

      {
          serverError && (<div className="alert alert-danger">Server Error: email sau parola invalid</div>)
      }

      <input type="text" className="form-control" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} value={email} />
      <input type="password" className="form-control" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} value={password} />

      <button className="btn btn-success" disabled={isNotValid} onClick={login}>Login</button>
    </>
  );
}

export default Login;