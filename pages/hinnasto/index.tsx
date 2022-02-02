import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";

const BaseGrid = styled.div`
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    "img main main"
  }
`;

const Img = styled.img`
  object-fit: cover;
  grid-area: img;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  grid-area: main;
  margin: 0 3rem;
`;

const Hinnasto: NextPage = () => {
  return (
    <Layout>
      <BaseGrid>
        <Img src={require("../../public/images/leximus.jpg")} alt="leximus" />
        <Text>
          <h2>Vuokrahinnasto</h2>
          <p>
            su-to 500€ <br />
            pe-la 750€ <br />
            <br />
            Opiskelijat: <br />
            su-to 460€ <br />
            pe-la 700€
            <br />
            <br />
            Ainejärjestöt: <br />
            su-to 440€ <br />
            pe-la 600€ <br />
            <br />
            Sesonkiaikana 1.11-31.12. viikonloppuisin vuokrahinnastoon lisätään
            50 euron lisä. Pyhäpäiviä edeltävät päivät hinnoitellaan
            viikonloppuhintojen mukaisesti. Kaikki hinnat sis. ALV24 %.
            Vuokrahintaan sisältyy siivous. Vuokra-aika 17–5:30.
            Päivävuokrauksia varten kysy tarjousta sähköpostitse osoitteesta
            tilat@luuppi.fi.
          </p>
        </Text>
      </BaseGrid>
    </Layout>
  );
};

export default Hinnasto;
