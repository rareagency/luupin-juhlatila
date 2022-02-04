import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";

const BaseGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "img main main";
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const Img = styled.img`
  object-fit: cover;
  grid-area: img;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    height: 25rem;
  }
  @media (max-width: 600px) {
    height: 15rem;
  }
`;

const Text = styled.div`
  grid-area: main;
  margin: 0 3rem;
`;

type Props = {
  children: JSX.Element;
};

export default function SideImageLayout({ children }: Props) {
  return (
    <Layout>
      <BaseGrid>
        <Img src={require("../../public/images/leximus.jpg")} alt="leximus" />
        <Text>{children}</Text>
      </BaseGrid>
    </Layout>
  );
}
