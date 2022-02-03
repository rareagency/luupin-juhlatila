import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
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
    if (width < 400) {
      getDimension(width - 50);
    } else getDimension(400);
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
          Järjestä juhlat meillä täällä on kaikki mitä tarvitset! Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec ornare libero vitae
          mauris ornare, et suscipit neque mattis. Donec mollis sapien in neque
          sodales congue. Donec dictum id lectus ac malesuada.
        </p>
        <button>Varaa tila</button>
      </div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpiiklubi&tabs=timeline&width=400&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
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
