/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import firebase from "firebase";

import Login from "Login";

import { Switch, Route, Redirect } from "react-router-dom";

class PortalMain extends Component {
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
    if (!this.state.auth) {
      return <LogIn />;
    } else if (!firebase.auth().currentUser.emailVerified) {
      return <Verify />;
      //TODO: display a 'resend email' button
    } else {
      return this.renderChatMain();
    }
  }

  renderChatMain = () => {
    return (
      <div>
        <Header history={this.props.history} />
        <Switch>
          <Redirect exact path="/" to="/list" />
          <Route path="/list" component={ListView} />
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
