import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import MobileNav from "./mobilenav";

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

const DesktopNav = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>&pi; -KLUBI</div>
      <DesktopNav>
        <Navbar />
      </DesktopNav>
      <MobileNav />
    </HeaderContainer>
  );
};

export default Header;
