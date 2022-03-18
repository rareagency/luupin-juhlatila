import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-gap: 2rem;
  justify-items: center;
  padding: 2rem;
  button {
    text-aling: center;
  }
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    iframe {
      align-self: center;
    }
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

const FrontpageInfo: React.FC = () => {
  const [screenWidth, getDimension] = useState(0);

  const setDimension = () => {
    const width = window.innerWidth;
    if (width < 500) {
      getDimension(width - 50);
    } else getDimension(500);
  };

  useEffect(() => {
    setDimension();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenWidth]);

  return (
    <InfoContainer>
      <div>
        <p>
          Monipuolinen juhlatila tarjoaa mahdollisuuden järjestää erilaisia
          tilaisuuksia ja tapahtumia sekä järjestöille, yrityksille että
          yksityishenkilöille.
        </p>
        <Link href="/varaus" passHref>
          <button>Varaa tila</button>
        </Link>
      </div>
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpiiklubi&tabs=timeline&width=${screenWidth}&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
        width={screenWidth}
        height="600"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </InfoContainer>
  );
};

export default FrontpageInfo;
