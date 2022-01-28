import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../header";

const GlobalStyle = createGlobalStyle`
  body, html {
    background: #F7F7FE;
    color: #474747;
    font-family: p22-underground, sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 0;
    margin: 0;
  }
  h1, h2 {
    font-family: rigid-square, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 2rem 0;
  }
  button {
    background: #474747;
    border: none;
    color: #f8f7fe;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    display: block;
    font-family: rigid-square, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    margin: 2rem auto;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  
`;

const ChildrenContainer = styled.div`
  margin-top: 5rem;
`;

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ChildrenContainer> {children} </ChildrenContainer>
    </>
  );
}
