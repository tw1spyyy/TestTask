import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
const body = styled.body`
  padding: 0 10px;
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <App />
  </>
);
