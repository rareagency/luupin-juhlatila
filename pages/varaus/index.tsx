import type { NextPage } from "next";
import SideImageLayout from "../../components/sideImageLayout";

const Varaus: NextPage = () => {
  return (
    <SideImageLayout>
      <div>
        <h2>Varaus</h2>
        <p>
          Lähetä varaustiedustelusi osoitteeseen{" "}
          <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi</a>! Muista
          liittää seuraavat tiedot tiedusteluusi:
        </p>
        <ul>
          <li>Päivämäärä sekä kellonaika</li>
          <li>
            Varaajan yhteystiedot
            <ul>
              <li>Postiosoite, postinumero ja toimipaikka</li>
            </ul>
          </li>
          <li>Varaajan laskutusosoite sekä sähköposti</li>
          <li>Yrityksiltä ja yhdistyksiltä y-tunnus</li>
        </ul>
      </div>
    </SideImageLayout>
  );
};

export default Varaus;
