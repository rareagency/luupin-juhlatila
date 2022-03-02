import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../header";
import Footer from "../footer";

const GlobalStyle = createGlobalStyle`
  body, html {
    background: #F7F7FE;
    color: #474747;
    font-family: p22-underground, sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 0;
    margin: 0;
    height: 100%;
    @media (min-width: 1500px) {
      font-size: 1.1rem;
    }
    @media (min-width: 2000px) {
      font-size: 1.2rem;
    }
  }
  #__next {
    height: 100%;
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

const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChildrenContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 600px) {
    margin-top: 4rem;
  }
`;

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Pii-Klubi</title>
        <meta
          name="description"
          content="Pii-Klubi, juhla- ja saunatila Tampereen keskustassa"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Fonts: */}
        <link rel="stylesheet" href="https://use.typekit.net/mdv6ewv.css" />
        <link rel="stylesheet" href="https://use.typekit.net/mdv6ewv.css" />
      </Head>
      <LayoutContainer>
        <GlobalStyle />
        <Header />
        <ChildrenContainer> {children} </ChildrenContainer>
        <Footer />
      </LayoutContainer>
    </div>
  );
}
