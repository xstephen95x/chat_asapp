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
      messages: [],
      leftIsTyping: false,
      rightIsTyping: false
    };
  }

  render() {
    return (
      <WindowsWrapper>
        <ChatWindow
          messages={this.state.messages}
          submitMessage={this.submitMessage}
          isLeft={true}
          isTyping={this.state.rightIsTyping}
          toggleTyping={val => this.toggleTyping(true, val)}
        />
        <ChatWindow
          messages={this.state.messages}
          submitMessage={this.submitMessage}
          isLeft={false}
          isTyping={this.state.leftIsTyping}
          toggleTyping={val => this.toggleTyping(false, val)}
        />
      </WindowsWrapper>
    );
  }

  toggleTyping = (isLeft, val) => {
    console.log(val);
    if (isLeft) {
      this.setState({ leftIsTyping: val });
    } else {
      this.setState({ rightIsTyping: val });
    }
  };

  submitMessage = (text, from, to) => {
    let messages = this.state.messages;
    let newMessage = {
      from,
      to,
      text
    };
    messages.push(newMessage);
    this.setState({ messages });
  };
}

export default ChatWindows;

const WindowsWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  top: 60px;
  bottom: 0px;
`;
