import { injectGlobal } from "styled-components";

export const Breakpoints = {};
export const Colors = {};

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'PT Sans', sans-serif;
  }
`;
