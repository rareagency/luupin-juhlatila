/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

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
        <HeaderImage
          src={require("../../public/images/kansikuva.jpg")}
          alt="kansikuva"
        />
        <FirstCarousel>
          <div>
            <CarouselImage
              src={require("../../public/images/sauna.jpg")}
              alt="sauna"
            />
          </div>
          <div>
            <CarouselImage
              src={require("../../public/images/kansikuva.jpg")}
              alt="kansikuva"
            />
          </div>
        </FirstCarousel>
        <FirstText>
          <h3>Moternit juhlatilat</h3>
          <p>
            Hyvät kaikkiin opiskelija ja ei opiskelija paartyihin. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec ornare libero
            vitae mauris ornare, et suscipit neque mattis. Donec mollis sapien
            in neque sodales congue. Donec dictum id lectus ac malesuada.
          </p>
          <Link href="/varaus" passHref>
            <button>Varaa tila</button>
          </Link>
        </FirstText>
        <SecondCarousel>
          <div>
            <CarouselImage
              src={require("../../public/images/keittiö.jpg")}
              alt="keittiö"
            />
          </div>
          <div>
            <CarouselImage
              src={require("../../public/images/kansikuva.jpg")}
              alt="kansikuva"
            />
          </div>
        </SecondCarousel>
        <SecondText>
          <h2>Varustelu</h2>
          <p>
            Tällästä kaikkea löytyy teittin käyttöön: <br />
            - Taittopöytiä x määrä <br />
            - Tuoleja Aatioita x määrä <br />
            - Keittiö <br />
            - jne <br />
          </p>
        </SecondText>
      </BaseGrid>
    </Layout>
  );
};

export default Tilat;
