import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../header";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7FE;
    color: #474747;
    font-family: p22-underground, sans-serif;
    font-weight: 400;
    font-style: normal;
    h1, h2 {
        font-family: rigid-square, sans-serif;
        font-weight: 400;
        font-style: normal;
    }
  }
`;

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}
