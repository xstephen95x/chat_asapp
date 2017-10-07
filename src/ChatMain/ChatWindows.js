/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import firebase from "firebase";

import Login from "Login";

import { Switch, Route, Redirect } from "react-router-dom";

class ChatWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    };
  }

  render() {
    return null;
  }
}

export default ChatWindows;
