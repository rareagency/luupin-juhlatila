import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import MobileNav from "./mobilenav";
import Logo from "../../public/images/logo_suora.png";

const HeaderContainer = styled.header`
  background: #f7f7fe;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  @media (max-width: 950px) {
    padding: 1rem 2rem;
  }
`;

const Img = styled.img`
  height: 0.8rem;
  width: auto;
`;

const DesktopNav = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Img src={Logo} alt="Pii-klubi" />
      <DesktopNav>
        <Navbar />
      </DesktopNav>
      <MobileNav />
    </HeaderContainer>
  );
};

export default Header;
