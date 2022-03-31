import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SideImageLayout from "../../components/sideImageLayout";

const Yhteystiedot: NextPage = () => {
  const [mapWidth, getDimension] = useState(0);

  const setDimension = () => {
    const width = window.innerWidth;
    if (width < 500) {
      getDimension(width - 50);
    } else if (width < 950) {
      getDimension(width - 100);
    } else {
      getDimension((width / 3) * 2 - 100);
    }
  };

  useEffect(() => {
    setDimension();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [mapWidth]);

  return (
    <SideImageLayout>
      <div>
        <h2>Yhteystiedot</h2>
        <p>
          Luupin toimitilatiimi:{" "}
          <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi</a>
          <br />
          Osoite: Yliopistonkatu 58B, 33100 Tampere
          <br />
          <a href="https://www.luuppi.fi" target="_blank" rel="noreferrer">
            www.luuppi.fi
          </a>
        </p>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1udxC-9jUfnpF5-bZyxiT3SlEcPMRnAh9&ehbc=2E312F"
          width={mapWidth}
          height="500"
        ></iframe>
      </div>
    </SideImageLayout>
  );
};

export default Yhteystiedot;
