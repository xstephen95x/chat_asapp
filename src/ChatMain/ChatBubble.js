import React from "react";
import styled from "styled-components";

const ChatBubble = ({ fromSender, message }) => {
  return (
    <ChatBubbleWrapper className={fromSender ? "" : "left"}>
      {message}
    </ChatBubbleWrapper>
  );
};

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
  transition: all 150ms ease-in-out;
  &.left {
    background: rgba(126, 138, 137, 0.5);
  }
  &:hover {
    box-shadow: 0px 0px 10px 0px black;
  }
`;
