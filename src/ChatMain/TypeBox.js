/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

import Send from "./send.svg";

//TODO: Manually focus textboxs

class TypeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: ""
    };
  }

  render() {
    return (
      <TypeBoxWrapper>
        <Form>
          <Input
            value={this.state.buffer}
            onChange={this.handleTextChange}
            onKeyPress={this.detectEnter}
          />
        </Form>
        <Icon src={Send} onClick={this.sendMessage} />
      </TypeBoxWrapper>
    );
  }

  handleTextChange = e => {
    let buffer = e.target.value;
    if (this.state.buffer.length === 0) {
      // began as blank
      this.props.toggleTyping(true);
    } else if (buffer.length === 0) {
      // is now blank
      this.props.toggleTyping(false);
    }
    this.setState({ buffer });
  };

  detectEnter = e => {
    if (e.charCode == 13) {
      // ENTER key
      e.preventDefault();
      e.stopPropagation();
      this.sendMessage();
    }
  };

  sendMessage = () => {
    let to = "left";
    let from = "right";
    if (this.props.isLeft) {
      to = "right";
      from = "left";
    }
    this.props.submitMessage(this.state.buffer, from, to);
    this.setState({ buffer: "" });
    this.props.toggleTyping(false);
  };
}

export default TypeBox;

const Icon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0;
  top: 5px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;
const Input = styled.textarea`
  border: 0px;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 22px;
  width: calc(100% - 50px);
  height: 55px;
  background: #eceded;
  transition: all 150ms ease-in-out;
  &:focus {
    box-shadow: inset 0px -27px 19px -11px rgba(51, 230, 221, 1);
    outline: none;
  }
`;
const TypeBoxWrapper = styled.div`
  border-top: 1px solid grey;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background: #eceded;
`;

const Form = styled.form`
  height: 55px;
  width: auto;
`;
