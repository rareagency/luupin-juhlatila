import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  background: #f7f7fe;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const NavBar = styled.div`
  display: flex;
  a {
    margin-right: 2rem;
  }
  a:last-child {
    margin: 0;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>&pi; -KLUBI</div>
      <NavBar>
        <Link href="/">
          <a>Etusivu</a>
        </Link>
        <Link href="/hinnasto">
          <a>Hinnasto</a>
        </Link>
        <Link href="/">
          <a>Tilat</a>
        </Link>
        <Link href="/">
          <a>Varaus</a>
        </Link>
        <Link href="/">
          <a>Yhteystiedot</a>
        </Link>
        <Link href="/">
          <a>Varausehdot</a>
        </Link>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
