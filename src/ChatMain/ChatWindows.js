/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

import Login from "Login";
import ChatWindow from "ChatMain/ChatWindow";

import { Switch, Route, Redirect } from "react-router-dom";

class ChatWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    return (
      <WindowsWrapper>
        <ChatWindow
          messages={this.state.messages}
          submitMessage={this.submitMessage}
          isLeft={true}
        />
        <ChatWindow
          messages={this.state.messages}
          submitMessage={this.submitMessage}
          isLeft={false}
        />
      </WindowsWrapper>
    );
  }

  submitMessage = (message, from, to) => {
    let messages = this.state.messages;
    let newMessage = {
      from,
      to,
      message
    };
    messages.append(newMessage);
    this.setState({ messages });
  };
}

export default ChatWindows;

const WindowsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: auto;
  top: 60px;
  bottom: 0px;
`;
