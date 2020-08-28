import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import Success from "./components/Success";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route path="/" exact component={UserDetails} />
    <Route path="/success" component={Success} />
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
