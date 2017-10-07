/* Written by Stephen L. White, stwhite@mit.edu
  - For ASAPP coding challenge,  October 2017
*/
import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

class TypeBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TypeBoxWrapper>
        <form>
          <Input onKeyPress={this.detectEnter} />
        </form>
      </TypeBoxWrapper>
    );
  }
  detectEnter = e => {
    if (e.charCode == 13) {
      e.preventDefault();
      e.stopPropagation();
      console.log("ENTER");
    }
  };
}

export default TypeBox;

const Input = styled.textarea`
  word-wrap: break-word;
  display: inline-block;
  overflow: hidden;
  font-size: 22px;
  background-color: #f0f0f0;
  width: 90%;
  height: auto;
`;
const TypeBoxWrapper = styled.div`
  width: 50%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background: rgba(50, 50, 50, 0.8);
`;
