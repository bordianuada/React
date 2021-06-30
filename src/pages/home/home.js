import React from "react";
import { useHistory } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  const goToRegister = () => {
    history.push("/register");
  };
  const goToProgram = () => {
    history.push("/program");
  };
  return (
    <>
      <button className="btn btn-primary" onClick={goToLogin}>
        Login
      </button>
      <button className="btn btn-primary" onClick={goToRegister}>
        Register
      </button>
      <button className="btn btn-primary" onClick={goToProgram}>
        Programare
      </button>
      <h1>HOME</h1>
    </>
  );
}

export default Home;
