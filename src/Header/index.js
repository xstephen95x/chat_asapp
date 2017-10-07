import React, { Component } from "react";
import styled from "styled-components";

import DropDown from "Header/DropDown";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <HeaderWrapper>
        <TitleWrapper>
          <Title>Chat Asapp</Title>
        </TitleWrapper>

        <Icon tabIndex="0" onClick={this.toggleMenu}>
          <svg width="24px" height="14px" viewBox="0 0 24 14">
            <rect x="7" y="0" width="17" height="2" rx="1" />
            <rect x="0" y="6" width="24" height="2" rx="1" />
            <rect x="0" y="12" width="24" height="2" rx="1" />
          </svg>
        </Icon>

        <DropDown
          onFocus={this.handleFocus}
          isOpen={this.state.isOpen}
          onBlur={this.handleBlur}
        />
      </HeaderWrapper>
    );
  }
  toggleMenu = () => {
    if (!this.state.disableButton) {
      if (!this.state.isOpen) {
        document.getElementById("menu").focus();
      }
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
  handleBlur = () => {
    this.setState({ isOpen: false });
    setTimeout(() => {
      this.setState({ disableButton: false });
    }, 300);
  };
  handleFocus = () => {
    this.setState({ disableButton: true });
  };
}

export default Header;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  line-height: 60px;
  user-select: none;
  cursor: default;
  letter-spacing: 2px;
`;
const HeaderWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  border-bottom: 1px solid grey;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8);
  z-index: 10000;
`;
const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 22px;
  transition: all 100ms ease-in-out;
  z-index: 1001;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`;
const FileIcon = styled.img`
  position: absolute;
  top: 12px;
  height: 40px;
  width: 40px;
  margin-left: 15px;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`;
const UploadIcon = styled.img`
  top: 0px;
  height: 45px;
  position: absolute;
  margin-left: 65px;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  padding-bottom: 15px;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`;

const TabPointer = styled.div`
  position: absolute;
  top: 52px;
  width: 0;
  height: 0;
  left: 29px;
  border-bottom: 8px solid black;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  transition: all 150ms ease-in-out;
  &.upload {
    left: 85px;
  }
`;
