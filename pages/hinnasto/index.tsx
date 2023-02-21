import type { NextPage } from "next";
import styled from "styled-components";
import SideImageLayout from "../../components/sideImageLayout";

const Overline = styled.span`
  text-decoration: line-through;
`;

const Hinnasto: NextPage = () => {
  return (
    <SideImageLayout>
      <div>
        <h2>Hinnasto</h2>
        <p>
          Yritykset, yksityishenkilöt: <br />
          To, Su: 620€
          <br />
          Pe, La: 720€
        </p>
        <p>
          Ainejärjestöt/killat, opiskelijat:
          <br />
          To, Su: 570€
          <br />
          Pe, La: 600€
        </p>
        <p>
          Luuppilaiset:
          <br />
          To - Su: 350€
        </p>
        <p>
          Hintoihin lisätään sesonkilisä 100€ marras- ja joulukuussa. <br />
          Maanantaisin, tiistaisin ja keskiviikkoisin tila ei ole
          oletusarvoisesti varattavissa. <br />
          Huom! Wapun aikana (13.4. - 1.5.) 
          tila on varattavissa viikon jokaisena päivänä. <br />
          Voit kuitenkin kysellä mahdollisuuksia{" "}
          <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi!</a>
        </p>
      </div>
    </SideImageLayout>
  );
};

export default Hinnasto;
