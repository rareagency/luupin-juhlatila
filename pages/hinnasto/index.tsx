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
          To, Su: 600€
          <br />
          Pe, La: 700€
        </p>
        <p>
          Ainejärjestöt/killat, opiskelijat:
          <br />
          To, Su: 550€
          <br />
          Pe, La: 580€
        </p>
        <p>
          Luuppilaiset:
          <br />
          To - Su: 350€
        </p>
        <p>
          Maanantaisin, tiistaisin ja keskiviikkoisin tila ei ole
          oletusarvoisesti varattavissa. Voit kuitenkin kysellä mahdollisuuksia{" "}
          <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi!</a>
        </p>
      </div>
    </SideImageLayout>
  );
};

export default Hinnasto;
