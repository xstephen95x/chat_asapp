import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default ({ isOpen, onFocus, onBlur }) => {
  return (
    <Menu
      id="menu"
      tabIndex="0"
      onFocus={onFocus}
      onBlur={onBlur}
      className={isOpen ? "open" : ""}
    >
      <Tip />
      <MenuItem onClick={() => firebase.auth().signOut()}>Log Out</MenuItem>
    </Menu>
  );
};

const Tip = styled.div`
  position: absolute;
  top: -8px;
  right: 35px;
  width: 0;
  height: 0;
  border-bottom: 8px solid #f0f0f0;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
`;
const MenuItem = styled.div`
  width: 90%;
  text-align: center;
  height: 40px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  transition: all 100ms ease-in-out;
  border-radius: 5px;
  &:hover {
    font-size: 17px;
    background: rgba(220, 220, 220, 0.8);
  }
`;
const Menu = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 2px 30px -2px rgba(0, 0, 0, 0.8);
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 60px;
  position: fixed;
  right: -20px;
  top: -130px;
  transition: all 100ms ease-in-out;
  width: 210px;
  z-index: -1;
  right: 10px;
  &.open {
    top: 70px;
  }
  &:focus {
    outline: none;
  }
`;
