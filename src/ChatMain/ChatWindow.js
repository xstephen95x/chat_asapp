/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";

import TypeBox from "ChatMain/TypeBox";
import MessageView from "ChatMain/MessageView";
import NameBanner from "ChatMain/NameBanner";

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }
  render() {
    return (
      <ChatWindowWrapper>
        <NameBanner
          name={this.props.isLeft ? "Laura" : "Rob"}
          isFocused={this.state.isFocused}
        />
        <MessageView
          messages={this.props.messages}
          isLeft={this.props.isLeft}
          isTyping={this.props.isTyping}
        />
        <TypeBox
          submitMessage={this.props.submitMessage}
          isLeft={this.props.isLeft}
          toggleTyping={this.props.toggleTyping}
          toggleFocus={this.toggleFocus}
        />
      </ChatWindowWrapper>
    );
  }

  toggleFocus = isFocused => {
    this.setState({ isFocused });
  };
}

export default ChatWindow;

export const ChatWindowWrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  width: 100%;
  height: 100%;
`;
