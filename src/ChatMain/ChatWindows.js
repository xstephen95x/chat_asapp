/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

import ChatWindow from "ChatMain/ChatWindow";

class ChatWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      leftIsTyping: false,
      rightIsTyping: false
    };
  }

  componentDidMount() {
    this.attachDBListener();
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

  attachDBListener = () => {
    const dataPath = `chats/${firebase.auth().currentUser.uid}`;
    firebase
      .database()
      .ref(dataPath)
      .on("value", snapshot => {
        let messages = snapshot.val();
        if (messages && messages.length > this.state.messages.length) {
          this.setState({ messages });
        }
      });
  };

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
    firebase
      .database()
      .ref(`chats/${firebase.auth().currentUser.uid}`)
      .transaction(node => {
        if (!node) {
          node = [];
        }
        node.push(newMessage);
        return node;
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
