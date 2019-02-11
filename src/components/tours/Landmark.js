import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./landmark/img1.jpg";
import imgCard2 from "./landmark/img2.jpg";
import imgCard3 from "./landmark/img3.jpg";

const LandMark = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Landmark of the Risen Jesus</h1>
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
        src="https://www.google.com/maps/embed?pb=!1m15!1m11!1m3!1d6434.0649213862725!2d124.33329261857197!3d12.553937232274986!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!2m1!1sresort+near+Lavezares%2C+Northern+Samar!5e1!3m2!1sen!2sph!4v1549540886678"
      />
    </section>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're glad to hear something from you.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Submit
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default LandMark;
