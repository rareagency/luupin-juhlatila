import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import { MenuAltRight, X } from "@styled-icons/boxicons-regular";

interface OpenMenuProps {
  isOpen: boolean;
}

const MobileNavContainer = styled.header`
  display: flex;
  flex-direction: column;
  @media (min-width: 951px) {
    display: none;
  }
`;

const OpenMenu = styled.div`
  display: ${(p: OpenMenuProps) => (p.isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  color: #f7f7fe;
  background-color: #474747;
`;

const Menu = styled(MenuAltRight)`
  color: #474747;
  height: 3rem;
  width: auto;
  @media (max-width: 600px) {
    height: 2rem;
  }
`;

const Close = styled(X)`
  color: #f7f7fe;
  height: 4rem;
  width: auto;
  position: absolute;
  top: 2rem;
  right: 2rem;
  @media (max-width: 600px) {
    height: 2rem;
    top: 1rem;
    right: 1rem;
  }
`;

const MobileNav: React.FC = () => {
  const [menuOpen, setOpen] = useState(false);

  return (
    <MobileNavContainer>
      <Menu onClick={() => setOpen(true)} />
      <OpenMenu isOpen={menuOpen}>
        <Close onClick={() => setOpen(false)} />
        <Navbar />
      </OpenMenu>
    </MobileNavContainer>
  );
};

export default MobileNav;
