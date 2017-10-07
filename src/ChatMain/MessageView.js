/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

class MessageView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MessageViewWrapper>
        {this.renderMessages(this.props.messages)}
      </MessageViewWrapper>
    );
  }
  renderMessages = messages => {
    return messages.map((message, i) => {
      return "foo";
    });
  };
  detectEnter = e => {
    if (e.charCode == 13) {
      e.preventDefault();
      e.stopPropagation();
      //TODO: record message
    }
  };
}

export default MessageView;

const MessageViewWrapper = styled.div`
  position: absolute;
  padding: 10px;
  width: 50%;
  height: auto;
  bottom: 100px;
  top: 0;
`;
