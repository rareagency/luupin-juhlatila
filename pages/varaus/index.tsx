import type { NextPage } from "next";
import SideImageLayout from "../../components/sideImageLayout";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  max-width: 50%;
  height: 100%;
  margin-left: 1rem;
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Varaus: NextPage = () => {
  return (
    <SideImageLayout>
      <>
        <h2>Varaus</h2>
        <ContentWrapper>
          <div>
            <p>
              Lähetä varaustiedustelusi osoitteeseen{" "}
              <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi</a>!
              Muista liittää seuraavat tiedot tiedusteluusi:
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
            <p>
            Loppusiivouksen voit tilata yhteistyökumppaniltamme hintaan 120€. 
            Lisätietoja ja varaus sähköpostilla <a href="mailto: info@katajama.fi">info@katajama.fi</a>. Varaukset tehtävä 
            mielellään 2vko ennen tilaisuutta.
            </p>
          </div>
          {process.browser && (
            <CalendarWrapper>
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  googleCalendarPlugin,
                  interactionPlugin,
                ]}
                initialView="dayGridMonth"
                googleCalendarApiKey="AIzaSyCdZG-_vkWwYv-jB_yHQmZyM76l-EATdmo"
                locale={"fi"}
                firstDay={1}
                events={{
                  googleCalendarId:
                    "c_aerqhho5i105mtqsm2lcv4oaac@group.calendar.google.com",
                  color: "#8980F1",
                  textColor: "#8980F1",
                  defaultAllDay: true,
                }}
                height={"auto"}
                headerToolbar={{
                  end: "prev,next",
                }}
              />
            </CalendarWrapper>
          )}
        </ContentWrapper>
      </>
    </SideImageLayout>
  );
};

export default Varaus;
