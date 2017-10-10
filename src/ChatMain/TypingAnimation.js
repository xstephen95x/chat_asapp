import React, { Component } from "react";
import styled from "styled-components";
import { ThreeBounce } from "better-react-spinkit";

const TypingAnimation = ({}) => {
  return (
    <AnimationBubble>
      <AnimationWrapper>
        <ThreeBounce color="blue" />
      </AnimationWrapper>
    </AnimationBubble>
  );
};

export default TypingAnimation;

const AnimationWrapper = styled.div`
  padding: 8px;
  position: relative;
`;

const AnimationBubble = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  width: 100px;
  height: 36px;
  bottom: 0px;
  margin: 0 auto;
  border-radius: 10px;
  margin-left: 5px;
  background: rgba(126, 138, 137, 0.5);
`;
