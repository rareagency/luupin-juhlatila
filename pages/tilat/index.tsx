/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Kansikuva from "../../public/images/kansikuva.jpg";
import Sauna from "../../public/images/sauna.jpg";
import Keittio from "../../public/images/keittiö.jpg";

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25rem 30rem 30rem;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeaderImage = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
  @media (max-width: 600px) {
    height: 15rem;
  }
`;

const CarouselImage = styled.img`
  height: 30rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 20rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  .thumbs-wrapper,
  .carousel-status {
    display: none;
  }
  .control-arrow {
    height: 100%;
  }
  .dot {
    box-shadow: 2px 2px 3px rgb(0 0 0 / 50%) !important;
  }
`;

const FirstCarousel = styled(StyledCarousel)`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
`;
const SecondCarousel = styled(StyledCarousel)`
  grid-column: 2 / span 2;
  grid-row: 3 / span 1;
`;

const FirstText = styled.div`
  background: #8980f1;
  padding: 2rem;
  color: #f8f7fe;
  font-weight: 600;
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
`;

const SecondText = styled.div`
  padding: 2rem;
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
`;

const Tilat: NextPage = () => {
  return (
    <Layout>
      <BaseGrid>
        <HeaderImage src={Kansikuva} alt="kansikuva" />
        <FirstCarousel>
          <div>
            <CarouselImage src={Sauna} alt="sauna" />
          </div>
          <div>
            <CarouselImage src={Kansikuva} alt="kansikuva" />
          </div>
        </FirstCarousel>
        <FirstText>
          <p>
            Suuri 270m2:n juhlatila mahdollistaa monenlaisten tapahtumien
            järjestämisen. Avaran juhlasalin lisäksi tilassa on käytettävissä
            parvi. Erillinen sauna- ja suihkutila on suuri ja tunnelmallinen.
            Saunan yhteydessä on pukeutumistila, josta löytyy myös kaapit
            tavaroiden säilyttämistä varten. Pii-Klubille mahtuu seisten 200
            henkilöä ja pöytäkattaukset on mahdollista tehdä jopa 120 hengelle.
            Juhlasalista ja parvelta löytyy sohvia vapaampaan oleskeluun.
          </p>
          <p>
            Tilassa ei ole anniskeluoikeuksia. Tilan siivoaminen ei sisälly
            vuokrahintaan.
          </p>
          <Link href="/varaus" passHref>
            <button>Varaa tila</button>
          </Link>
        </FirstText>
        <SecondCarousel>
          <div>
            <CarouselImage src={Keittio} alt="keittiö" />
          </div>
          <div>
            <CarouselImage src={Kansikuva} alt="kansikuva" />
          </div>
        </SecondCarousel>
        <SecondText>
          <h2>Varustelu</h2>
          <p>Vuokraajan käytössä on mm.</p>
          <ul>
            <li>Pöytiä 19 kpl</li>
            <li>Tuoleja 120 kpl</li>
            <li>Sohvatilaa n. 30 hengelle</li>
            <li>Runsaasti jääkaappitilaa</li>
            <li>Siivousvälineet </li>
          </ul>
        </SecondText>
      </BaseGrid>
    </Layout>
  );
};

export default Tilat;
