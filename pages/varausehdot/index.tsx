import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";

const Text = styled.div`
  margin: 3rem;
`;

const Hinnasto: NextPage = () => {
  return (
    <Layout>
      <Text>
        <h2>Varausehdot</h2>
        <h3>1. Soveltuminen</h3>
        <p>
          Näitä varausehtoja sovelletaan asiakkaan (vuokralaisena) ja
          Metsähallituksen (vuokranantajana ja palveluntarjoajana) väliseen
          sopimussuhteeseen vuokrakohteen (varaus- ja vuokratuvat, varauskammit,
          saunat, varaustelttapaikat, leirialueet sekä muut tilat) varaamisesta
          ja käyttämisestä. Varaus- ja vuokratupien sekä varauskammien varaus
          katsotaan yhdeksi varaukseksi, vaikka se koskisikin eri tuvilla/
          kohteilla tapahtuvia yöpymisiä. Varausehdot astuvat voimaan heti
          varauksen tekohetkellä ja niitä sovelletaan asiakkaan ja
          Metsähallituksen väliseen sopimussuhteeseen.
        </p>
        <h3>2. Hyväksyminen</h3>
        <p>
          Tekemällä varauksen asiakas vakuuttaa tutustuneensa näihin
          varausehtoihin ja hyväksyy nämä varausehdot.
        </p>
        <h3>3. Varaaminen</h3>
        <p>
          Varauksen voi tehdä Metsähallituksen asiakaspalvelupisteessä,
          puhelimitse, sähköpostitse tai omatoimisesti verkkovarauksena
          Eräluvat-verkkokaupassa. Asiakkaan on oltava täysi-ikäinen. Asiakkaan
          tekemä varaus on sitova.
        </p>
        <h3>4. Maksu ja maksuehdot</h3>
        <p>
          Koko varaus maksetaan kerralla. Mikäli varaus tehdään aikaisemmin kuin
          30 vrk ennen varausajan alkamista, laskun eräpäivä on 30 vrk ennen
          varausajan alkamista. Varausmaksu on maksettava laskuun merkittyyn
          eräpäivään mennessä. Mikäli varaus alkaa 30 vrk:n kuluessa
          varauspäivästä, varaus on maksettava heti. Laskun mukana asiakas saa
          tiedon avaimesta sekä muuta tarpeellista tietoa. Hinnat sisältävät
          kulloinkin voimassa olevan arvonlisäveron. Oikeus hinnanmuutoksiin
          pidätetään.
        </p>
        <h3>5. Muutokset</h3>
        <p>
          Muutokset ennen eräpäivää tai eräpäivänä Muutos maksamattomaan
          verkkotilaukseen tehdään ensisijaisesti rekisteröityneenä asiakkaana
          Eräluvat-verkkokaupassa itsepalveluna. Ennen maksun eräpäivää (30 vrk)
          tai eräpäivänä saa saman kalenterivuoden aikana siirtää maksamatonta
          tilausta saatavuuden mukaan toiseen ajankohtaan ilman lisäkuluja
          itsepalveluna verkkokaupassa. Maksettuun tilaukseen ei voi tehdä
          muutoksia itsepalveluna Eräluvat-verkkokaupassa, vaan se edellyttää
          yhteyden ottoa Metsähallituksen asiakaspalveluun soittamalla tai
          sähköpostitse. Muutoksen tilaukseen voi tehdä myös sähköpostitse tai
          soittamalla Metsähallituksen asiakaspalveluun aukioloaikana. Mikäli
          alkuperäistä tilausta muutetaan ennen eräpäivää (30 vrk) tai
          eräpäivänä sähköpostitse tai soittamalla asiakaspalveluun,
          Metsähallitus veloittaa tästä aiheutuvana toimistokuluna 13
          €/muutoskerta (sis. alv.). Jos tilaus on jo maksettu ja muutos
          vähentää maksettua loppusummaa asiakkaalle palautetaan ylimenevä summa
          vähennettynä toimistokuluilla (13 €, sis. alv). Alle 20 €:n (sis. alv)
          rahanpalautuksia ei tehdä. Mikäli muutos lisää maksettua loppusummaa,
          käsitellään tämä uutena tilauksena, josta ei veloiteta toimistokuluja.
          Sähköpostilla tehty muutos katsotaan saapuneeksi silloin, kun se on
          Metsähallituksen käytettävissä asiakaspalvelun aukioloaikana
          vastaanottolaitteessa tai tietojärjestelmässä siten, että viestiä
          voidaan käsitellä. Jos sähköinen viesti on saapunut Metsähallituksen
          asiakaspalveluun aukioloajan jälkeen, katsotaan muutos tapahtuneeksi
          seuraavana aukiolopäivänä. Muutokset eräpäivän jälkeen Tilauksen
          ajankohdan voi siirtää 7 vuorokautta ennen varauksen alkua
          sähköpostitse tai soittamalla Metsähallituksen asiakaspalveluun
          aukioloaikana. Metsähallitus veloittaa tästä aiheutuvana
          toimistokuluna 13 €/muutoskerta (sis. alv.). Tilauksen ajankohdan
          siirtämistä alle 7 vuorokautta ennen varauksen alkua ja muita
          muutoksia kuin tilauksen ajankohdan siirtäminen pidetään aikaisemman
          tilauksen peruutuksena ja uutena tilauksena.
        </p>
      </Text>
    </Layout>
  );
};

export default Hinnasto;
