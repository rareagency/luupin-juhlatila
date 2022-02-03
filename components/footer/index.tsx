import React from "react";
import styled from "styled-components";
import { FacebookSquare, InstagramAlt } from "@styled-icons/boxicons-logos";

const FooterContainer = styled.header`
  background: #474747;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
`;

const SocialMedia = styled.header`
  background: #5c5c5c;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: grid;
  justify-content: center;
  grid-template-columns: 3rem 3rem;
  grid-gap: 2rem;
  padding: 2rem 3rem;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  color: #f8f7fe;
  padding: 3rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const Facebook = styled(FacebookSquare)`
  color: #f8f7fe;
  height: 2rem;
  width: auto;
`;

const Instagram = styled(InstagramAlt)`
  color: #f8f7fe;
  height: 2rem;
  width: auto;
`;

const Logo = styled.img`
  height: 2rem;
  width: auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <a
          href="https://www.facebook.com/piiklubi"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/piiklubi"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </SocialMedia>
      <FooterContent>
        <div>
          Osoite Y-tunnus
          <br />
          Sähköposti
          <br />
          Puhelin yms.
        </div>
        <a href="https://www.rare.fi" target="_blank" rel="noreferrer">
          <Logo src={require("../../public/images/rare-logo.png")} alt="RARE" />
        </a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
