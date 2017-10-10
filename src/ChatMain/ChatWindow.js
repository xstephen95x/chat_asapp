/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

import TypeBox from "ChatMain/TypeBox";
import MessageView from "ChatMain/MessageView";

const ChatWindow = ({
  messages,
  submitMessage,
  isLeft,
  isTyping,
  toggleTyping
}) => {
  return (
    <ChatWindowWrapper>
      <MessageView messages={messages} isLeft={isLeft} isTyping={isTyping} />
      <TypeBox
        submitMessage={submitMessage}
        isLeft={isLeft}
        toggleTyping={toggleTyping}
      />
    </ChatWindowWrapper>
  );
};

export default ChatWindow;

const ChatWindowWrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  width: 100%;
  height: 100%;
`;
