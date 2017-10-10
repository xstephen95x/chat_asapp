/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

import TypingAnimation from "ChatMain/TypingAnimation";
import ChatBubble from "ChatMain/ChatBubble";

class MessageView extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <MessageViewWrapper ref={elm => (this.container = elm)}>
          <Overflow>
            {this.renderMessages(this.props.messages)}
            <Spacer />
          </Overflow>
        </MessageViewWrapper>
        {this.props.isTyping && <TypingAnimation />}
      </div>
    );
  }

  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.container);
    node.scrollTop = node.scrollHeight;
  };

  renderMessages = messages => {
    return messages.map((message, i) => {
      let key = `${this.props.isLeft ? "l" : "r"}-cr-${i}`;
      let fromSender = false;
      let className = "left";
      if (this.props.isLeft && message.from === "left") {
        fromSender = true;
        className = "";
      }
      if (!this.props.isLeft && message.from === "right") {
        fromSender = true;
        className = "";
      }
      return (
        <ChatRow key={key} className={className}>
          <ChatBubble fromSender={fromSender} message={message.text} />
        </ChatRow>
      );
    });
  };
}

export default MessageView;

const MessageViewWrapper = styled.div`
  overflow: scroll;
  position: relative;
  width: 100%;
  height: calc(100% - 62px);
  margin-bottom: 80px;
  bottom: 100px;
  top: 0;
`;
const Spacer = styled.div`
  width: 100%;
  height: 80px;
`;
const Overflow = styled.div`
  width: 100%;
  position: absolute;
  max-height: calc(100% - 80px);
  bottom: 0;
  right: 0;
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
