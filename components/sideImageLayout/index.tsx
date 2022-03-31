import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";
import Kansikuva from "../../public/images/kansikuva.jpg";

const BaseGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "img main main";
  @media (max-width: 950px) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Img = styled.img`
  object-fit: cover;
  grid-area: img;
  width: 100%;
  height: 100%;
  @media (max-width: 950px) {
    height: 25rem;
  }
  @media (max-width: 600px) {
    height: 15rem;
  }
`;

const Text = styled.div`
  grid-area: main;
  margin: 0 3rem 3rem 3rem;
  @media (max-width: 750px) {
    margin: 0 2rem 3rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 0 1rem 2rem 1rem;
  }
`;

type Props = {
  children: JSX.Element;
};

export default function SideImageLayout({ children }: Props) {
  return (
    <Layout>
      <BaseGrid>
        <Img src={Kansikuva} alt="Kansikuva" />
        <Text>{children}</Text>
      </BaseGrid>
    </Layout>
  );
}
