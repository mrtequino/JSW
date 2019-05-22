import React from "react";
import "./App.css";
import Inicio from "./Inicio";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Public Page</Link>
          </li>
          <li>
            <Link to="/inicio">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <Route path="/inicio" component={Inicio} />
      </div>
    </Router>
  );
}

export default App;
