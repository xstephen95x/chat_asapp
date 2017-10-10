/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

import Login from "Login";
import ChatWindow from "ChatMain/ChatWindow";

import { Switch, Route, Redirect } from "react-router-dom";

const API_USER = "sRK9LaQvtR0kMWoO";
const API_KEY = "jKiBKFAcqoCfigyNiMGq36KntyoWF2rH";

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
    this.callCleverbot();
  };

  callCleverbot = () => {
    console.log("calling cb");
    let cb = new window.cleverbot(API_USER, API_KEY);
    console.log(cb);
    cb.ask("is this thing on?", (err, res) => {
      console.log("-----------------");
      console.log(err, res);
    });
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
