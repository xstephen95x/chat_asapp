/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

import TypeBox from "ChatMain/TypeBox";
import MessageView from "ChatMain/MessageView";

class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ChatWindowWrapper>
        <MessageView messages={["foo", "bar"]} />
        <TypeBox submitMessage={this.props.submitMessage} />
      </ChatWindowWrapper>
    );
  }
}

export default ChatWindow;

const ChatWindowWrapper = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 100%;
`;
