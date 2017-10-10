import React, { Component } from "react";
import styled from "styled-components";

class ChatBubble extends Component {
  render() {
    return (
      <ChatBubbleWrapper className={this.props.fromSender ? "" : "left"}>
        {this.props.message}
      </ChatBubbleWrapper>
    );
  }
}

export default ChatBubble;

export const ChatBubbleWrapper = styled.div`
  position: relative;
  padding: 8px;
  margin: 5px;
  min-width: 50px;
  max-width: 50%;
  overflow-wrap: break-word;
  border-radius: 10px;
  background: rgba(0, 249, 224, 0.7);
  &.left {
    background: rgba(126, 138, 137, 0.5);
  }
`;
