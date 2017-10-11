import React from "react";
import styled from "styled-components";

const NameBanner = ({ name, isFocused }) => {
  return <NameWrapper className={isFocused && "focus"}>{name}</NameWrapper>;
};

export default NameBanner;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  line-height: 50px;
  font-weight: bold;
  position: absolute;
  background: #e0e0e0;
  width: 100%;
  height: 50px;
  z-index: 100;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8);
  transition: all 150ms ease-in-out;
  &.focus {
    background: #ffffff;
  }
`;
