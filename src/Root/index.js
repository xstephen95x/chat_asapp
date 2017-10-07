import React, { Component } from "react";
import firebase from "firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./mui.min.css"; //bind MUICSS styles rather than use CDN
import "global_styles";

import ChatMain from "ChatMain";

// Initialize the conncetion to firebase backend.
const config = {
  apiKey: "AIzaSyAuwlrqE9DGzQxwzVSgnlV4kHgpDSZV58k",
  authDomain: "chat-asapp-43a5e.firebaseapp.com",
  databaseURL: "https://chat-asapp-43a5e.firebaseio.com",
  projectId: "chat-asapp-43a5e",
  storageBucket: "",
  messagingSenderId: "806180022074"
};
firebase.initializeApp(config);

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ChatMain} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
