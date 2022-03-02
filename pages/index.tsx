/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Layout from "../components/layout";
import FrontpageInfo from "../components/frontpageInfo";
import styled from "styled-components";
import Link from "next/link";

const HeaderImage = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 15rem;
  }
`;

const Lift = styled.div`
  background: #8980f1;
  padding: 2rem 20%;
  color: #f8f7fe;
  font-weight: 600;
  text-align: center;
  margin-top: -0.5rem;
  @media (max-width: 600px) {
    padding: 2rem 10%;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <>
          <HeaderImage
            src={require("../public/images/kansikuva.jpg")}
            alt="kansikuva"
          />

          <Lift>
            <h2>&pi; -KLUBI - BEST THING EVER</h2>
            <p>
              Varaa tästä. Super hyvät diilit! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec ornare libero vitae mauris
              ornare, et suscipit neque mattis. Donec mollis sapien in neque
              sodales congue. Donec dictum id lectus ac malesuada.
            </p>
            <Link href="/tilat" passHref>
              <button>Tutustu tiloihin</button>
            </Link>
          </Lift>
          <FrontpageInfo />
        </>
      </Layout>
    </div>
  );
};

export default Home;
