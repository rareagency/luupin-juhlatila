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
          Toistaiseksi hinnoista saa 50€ alennuksen puuttuvan keittiön vuoksi.
        </p>
        <p>
          Yritykset: <br />
          Su, To: <Overline>520€</Overline> 480€
          <br />
          Pe, La: <Overline>620€</Overline> 580€
        </p>
        <p>
          Ainejärjestöt/killat:
          <br />
          Su, To: <Overline>500€</Overline> 450€
          <br />
          Pe, La: <Overline>580€</Overline> 530€
        </p>
        <p>
          Luuppilaiset:
          <br />
          Su, To: <Overline>480€</Overline> 430€
          <br />
          Pe, La: <Overline>550€</Overline> 500€
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
