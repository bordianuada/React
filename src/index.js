import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from "react-router"; // react-router v4/v5
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Program from "./pages/program/program";
import Pacient from "./pages/pacient/pacient";
import "bootstrap/dist/css/bootstrap.min.css";

const stored = configureStore(/* provide initial state if any */);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stored}>
      <ConnectedRouter history={history}>
        {" "}
        {/* place ConnectedRouter under Provider */}
        <>
          {" "}
          {/* your usual react-router v4/v5 routing */}
          <Switch>
            <Route exact path="/" render={() => <Home></Home>} />
            <Route exact path="/login" render={() => <Login></Login>} />
            <Route exact path="/register" render={() => <Register></Register>} />
            <Route exact path="/program" render={() => <Program></Program>} />
            <Route exact path="/pacient" render={() => <Pacient></Pacient>} />
            <Route render={() => <div>Miss</div>} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();