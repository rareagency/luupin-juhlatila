import type { NextPage } from "next";
import SideImageLayout from "../../components/sideImageLayout";

const Hinnasto: NextPage = () => {
  return (
    <SideImageLayout>
      <div>
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
          Sesonkiaikana 1.11-31.12. viikonloppuisin vuokrahinnastoon lisätään 50
          euron lisä. Pyhäpäiviä edeltävät päivät hinnoitellaan
          viikonloppuhintojen mukaisesti. Kaikki hinnat sis. ALV24 %.
          Vuokrahintaan sisältyy siivous. Vuokra-aika 17–5:30. Päivävuokrauksia
          varten kysy tarjousta sähköpostitse osoitteesta tilat@luuppi.fi.
        </p>
      </div>
    </SideImageLayout>
  );
};

export default Hinnasto;
