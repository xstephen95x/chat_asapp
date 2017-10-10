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
        <Overflow>{this.renderMessages(this.props.messages)}</Overflow>
      </MessageViewWrapper>
    );
  }
  renderMessages = messages => {
    return messages.map((message, i) => {
      let key = `${this.props.isLeft ? "l" : "r"}-cr-${i}`;
      let className = "left";
      if (this.props.isLeft && message.from == "left") {
        className = "";
      }
      if (!this.props.isLeft && message.from == "right") {
        className = "";
      }
      return (
        <ChatRow key={key} className={className}>
          <ChatBubble className={className}>{message.text}</ChatBubble>
        </ChatRow>
      );
    });
  };
}

export default MessageView;

const MessageViewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 80px);
  bottom: 100px;
  top: 0;
  overflow: scroll;
`;
const Overflow = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const ChatRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: auto;
  &.left {
    justify-content: flex-start;
  }
`;
const ChatBubble = styled.div`
  position: relative;
  padding: 8px;
  margin: 5px;
  min-width: 50px;
  max-width: 50%;
  overflow-wrap: normal;
  border-radius: 10px;
  background: rgba(0, 249, 224, 0.7);
  &.left {
    background: rgba(126, 138, 137, 0.5);
  }
`;
