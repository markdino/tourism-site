import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./landmark/img1.jpg";
import imgCard2 from "./landmark/img2.jpg";
import imgCard3 from "./landmark/img3.jpg";

import Review from "./Review";

const LandMark = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>
          Landmark of the Risen Jesus{" "}
          <i>(Nuestra Señora de Salvacion Statue)</i>
        </h1>
        <h4>Lavezares</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Lavezares is a quiet and peaceful town at the opposite end of
                Palapag along the historic San Bernardino Strait. Approaching
                from the sea, travelers are welcomed by a landmark unique to the
                town – a Marian scene cast in shimmering white stone rising
                above the waters of Lavezares Bay.
              </p>
              <p>
                The image is that of the Blessed Virgin Mary stretching out her
                arm to rescue a desolate male figure, seemingly helpless in the
                swirling waves. It is depiction of the Nuestra Señora de
                Salvacion (Our Lady of Salvation), patron saint of Lavezares.
              </p>
              <p>
                When the tides are high, it is a comforting sight of hope and
                redemption. At ebb tide, the base of the sculpture is visible –
                a vast coral reef at the heart of a bay that has been designated
                as a marine park.
              </p>
              <p>
                The monument is widely believed to have been built shortly after
                a passenger ship capsized off the coast of the town and its
                passengers said to have been miraculously saved through Our
                Lady’s intercession.
              </p>

              <h5>Contact</h5>

              <p>
                For more information please contact the Municipal Tourism
                Officer – Rodel Cuyco at 09282972948.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section>
      <iframe
        title="Lavezares Landmark map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13237.52720525115!2d124.32188689057335!3d12.546498298120103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0ad36f46e3619%3A0xd7077c26614c81ca!2sNuestra+Se%C3%B1ora+de+Salvacion+Statue!5e0!3m2!1sen!2sph!4v1549939951108"
      />
    </section>
    <Review />
  </div>
);

export default LandMark;
