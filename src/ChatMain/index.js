/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import firebase from "firebase";

import Login from "Login";
import Header from "Header";
import ChatWindows from "ChatMain/ChatWindows";
import Loading from "Login/Loading";

import { Switch, Route, Redirect } from "react-router-dom";

class ChatMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    };
  }

  componentWillMount() {
    this.attachAuthListener();
  }

  render() {
    if (this.state.auth) {
      return <Loading />;
      // return this.renderChatMain();
    } else if (this.state.auth === null) {
      return <Loading />;
    } else {
      return <Login />;
    }
  }

  renderChatMain = () => {
    return (
      <div>
        <Header history={this.props.history} />
        <Switch>
          <Redirect exact path="/" to="/chat" />
          <Route path="/chat" component={ChatWindows} />
        </Switch>
      </div>
    );
  };

  attachAuthListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ auth: true });
      } else {
        this.setState({ auth: false });
      }
    });
  };
}

export default ChatMain;
