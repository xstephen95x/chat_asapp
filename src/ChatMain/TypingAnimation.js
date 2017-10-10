import React from "react";
import styled from "styled-components";
import { ThreeBounce } from "better-react-spinkit";

const TypingAnimation = () => {
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
  position: absolute;
  bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100px;
  height: 36px;
  border-radius: 10px;
  margin-left: 5px;
  background: rgba(126, 138, 137, 0.5);
`;
