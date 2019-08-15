import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Docs from "./components/Docs/Docs";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing"
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout the user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Landing} />
          <Route path="/docs" component={Docs} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
