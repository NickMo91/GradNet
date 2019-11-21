import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from "./components/App";
import Profile from "./components/ProfilePage/Profile.jsx";
import Home from "./components/HomePage/Home.jsx";
import NotFound from './components/NotFound.jsx';
import "./styles.css";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)


var mountNode = document.getElementById("app");
ReactDOM.render(routing, mountNode);