import React, { Component } from "react";
import styled from "styled-components";
import { CubeGrid } from "better-react-spinkit";

// Displays a loading spinner, full view
const Loading = ({}) => {
  return (
    <SpinContainer>
      <Spinner>
        <CubeGrid size={400} color={"cyan"} />
      </Spinner>
    </SpinContainer>
  );
};

export default Loading;

const SpinContainer = styled.div`
  background: rgba(50, 50, 50, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Spinner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
