import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";

const Text = styled.div`
  margin: 3rem;
  @media (max-width: 750px) {
    margin: 3rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 2rem 1rem;
  }
`;

const Hinnasto: NextPage = () => {
  return (
    <Layout>
      <Text>
        <h2>Varausehdot</h2>

        <p>Varausehdot eivät ole lopulliset.</p>

        <h3>1. Vuokrauksen kohde</h3>
        <p>
          Vuokrauksen kohteena on Luuppi ry:n toimitila Pii-Klubi, joka
          sijaitsee osoitteessa Yliopistonkatu 58 B 0 krs 33100 Tampere.
          Vuokraukseen sisältyy juhlasali, parvi sekä saunatilat.
        </p>

        <h3>2. Varausehdot</h3>
        <ul>
          <li>
            Vuokra-aika to-pe alkaa aikaisintaan 17.00 ja päättyy klo 04:00,
            ellei erikseen muuta ole sovittu.{" "}
          </li>
          <li>
            Perusvuokra-aika on la-su enintään 12h ja se alkaa aikaisintaan 12:00 ja
            päättyy viimeistään 06.00. Päättymisajankohta määrittyy
            aloitusajankohdan mukaan, ellei erikseen muuta ole sovittu.{" "}
          </li>
          <li>
            Varauksen katsotaan alkavan siitä hetkestä kun avaimet luovutetaan
            vuokraajalle. Lisätunnit maksavat 50€/4h.{" "}
          </li>
          <li>
            Tilavuokraukseen sisältyvät tilojen käyttö, tuolit ja pöydät, keittiön käyttö
            sekä astiastot, wc-tilat joiden paperi täydennyksistä huolehtii
            vuokranantaja.{" "}
          </li>
        </ul>

        <h3>3. Maksu ja peruutusehdot</h3>
        <ul>
          <li>Tilojen vuokraajan on oltava täysi-ikäinen.</li>
          <li>
            Varauksen voi perua maksutta 2 viikkoa ennen varauksen ajankohtaa.
            Alle kaksi viikkoa ennen peruutetuista varauksista peritään puolet
            laskusta ja alle viikkoa ennen peruutetuista varauksista peritään täysi
            hinta. Varausta voi siirtää maksutta viimeistään 2 viikkoa ennen varattua
            ajankohtaa.
          </li>
          <li>
            Mahdollinen rikki mennyt tai hävinnyt kalusto laskutetaan
            tilaisuuden jälkeen.
          </li>
          <li>
            Ylivoimaisesta esteestä johtuen (esim. vesivahinko, tulipalo,
            ilkivalta) vuokranantaja voi perua varauksen ilman
            korvausvelvollisuutta ennen varauksen alkua. Vuokraajalla on tällöin
            oikeus saada maksamansa summa takaisin kokonaisuudessaan.
          </li>
        </ul>

        <h3>4. Ruoat ja juomat</h3>
        <ul>
          <li>Omat ruuat ja juomat ovat tiloissamme sallitut.</li>
          <li>
            Vuokraaja vastaa vuokra-aikana keittiön käytöstä ja sen
            turvallisuudesta.
          </li>
          <li>
            Rappukäytävässä ja sisäpihalla ei saa juoda alkoholijuomia tai
            kuljettaa avonaisia juomia.
          </li>
        </ul>
        <h3>5. Siivous</h3>
        <ul>
          <li>
            Vuokralaisen tulee käyttää tiloja noudattaen normaalia siisteyttä ja
            hyviä käytöstapoja. Tilojen tulee olla asiallisessa kunnossa
            tilaisuuden jälkeen.
          </li>
          <li>
            Vuokraaja huolehtii käyttämänsä tavarat, laitteet ja astiat puhtaina
            omille paikoilleen, pyyhkii tasot sekä lattiat, imuroi eteismatot ja
            huolehtii omat tavarat ja roskat pois tiloista vuokra-ajan
            puitteissa. Vuokraaja huolehtii myös piha-alueiden siisteydestä.
            Tarkemmat siivousohjeet löytyvät vuokraajan kansiosta.
          </li>
          <li>
            Veloitus siivouksen laiminlyönnistä on 200,00 €. Ilmoittamatta jätetyt
            lattialla olevat lasinsirpaleet ovat aina siivouslaskun peruste. Tilan
            vaatiessa suurta siivousta lisätään tähän 30€/h siivouskustannus.
          </li>
        </ul>

        <h3>6. Säännöt ja turvallisuus</h3>
        <ul>
          <li>
            Juhlatilassa saa yhtäaikaisesti olla korkeintaan 200 henkeä.
          </li>
          <li>
            Vuokraaja on velvollinen perehtymään laitteiden käyttöön annettuihin
            ohjeisiin ja noudattamaan niitä.
          </li>
          <li>
            Vuokraaja vastaa tapahtumansa turvallisuudesta. Vuokranantaja ei ota
            vastuuta loukkaantumisista.
          </li>
          <li>
            Jos alueita on rajattu pois käytöstä, on tämä selkeästi merkitty
            vuokranantajan toimesta. Rajausta on ehdottomasti noudatettava.
          </li>
          <li>
            Vuokranantajalla ja viranomaisella on oikeus keskeyttää tilaisuus,
            mikäli siitä katsotaan aiheutuvan vaaraa kiinteistölle,
            irtaimistolle, haittaa naapurustolle tai ympäristölle. Tilaisuus
            voidaan keskeyttää myös, mikäli vuokrausehtoja ei noudateta.
          </li>
          <li>
            Sisätiloissa ei saa polttaa kynttilöitä tai käyttää savukoneita.
            Mahdolliset aiheettomat palohälytykset laskutetaan vuokraajalta.
          </li>
          <li>
            Tupakointi kaikissa sisätiloissa on kielletty. Tupakointi on
            sallittu vain sille varatulla alueella sisäpihalla. Ulko-oven
            vieressä tupakointi on jyrkästi kielletty.
          </li>
          <li>
            Rappukäytävässä asiaton oleskelu on ehdottomasti kielletty.
          </li>
          <li>
            Vuokralainen on vastuussa siitä, että kaikki tilaisuuteen
            osallistuvat henkilöt noudattavat vuokrausehtoja.
          </li>
        </ul>

        <h3>7. Vahingot ja niiden korvaus</h3>
        <ul>
          <li>
            Tilan vuokraajalle luovutetaan avain juhlatilaan vuokrausajan
            alkaessa. Hävinneestä avaimesta perimme 100 €:n korvauksen.{" "}
          </li>
          <li>
            Vuokralainen on velvollinen korvaamaan vuokrauksen yhteydessä tiloille,
            kiinteistön omistajalle ja/tai kolmannelle osapuolelle aiheutetut vahingot.
            Vuokralainen on vastuussa myös vuokra-ajan jälkeen syntyneistä tai
            ilmenevistä vahingoista, jotka ovat aiheutuneet tiloissa olleiden
            toiminnasta tai huolimattomuudesta.
          </li>
          <li>
            Mikäli tilassa on tapahtuman jäljiltä lisäsiivouksen tai remontoimisen
            tarvetta sattuneiden vahinkojen tai ilkivallan vuoksi (esim. oksennus,
            tahrat seinillä, etc.), vuokranantaja laskuttaa nämä erikseen tilaisuuden
            jälkeen. Vuokralainen on velvollinen ilmoittamaan rikki menneistä
            astioista, muusta hajonneesta irtaimistosta tai kiinteistölle aiheutuneista
            haavereista. Rikkimenneistä tai kadonneista astioista ja ruokailuvälineistä
            veloitamme jälleenhankintahinnan mukaisesti.
          </li>
          <li>
            Jos tapahtuman jälkeen vuokraajan toiminnasta johtuen vuokranantaja
            saa valituksia tupakointipaikan ja/tai rappukäytävän väärinkäytöistä
            vuokraaja saa määräaikaisen vuokrakiellon tilaan sekä siivousta
            tarvittaessa siivouslaskun.
          </li>
          <li>
            Vuokranantaja ei korvaa vuokraajalle ylivoimaisesta esteestä
            aiheutuneita vahinkoja eikä missään olosuhteissa välillisiä
            vahinkoja.
          </li>
        </ul>

        <h3>8. Reklamaatio</h3>
        <ul>
          <li>
            Mahdolliset tiloja koskevat reklamaatiot tulee esittää viimeistään
            heti vuokrausta seuraavana arkipäivänä osoitteella
            toimitila@luuppi.fi
          </li>
        </ul>

        <h3>9. Muuta</h3>
        <ul>
          <li>
            Vuokranantaja pidättää oikeuden tilaus- ja toimitusehtojen sekä
            hintojen muutoksiin.
          </li>
        </ul>

        <h3>10. Sopimuksen voimaantulo</h3>
        <ul>
          <li>
            Sopimus astuu voimaan vuokraajan varauspyynnöstä ja sitoo molempia
            sopimusosapuolia.
          </li>
        </ul>
      </Text>
    </Layout>
  );
};

export default Hinnasto;
