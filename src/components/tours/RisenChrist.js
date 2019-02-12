import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./risen-christ/img1.jpg";
import imgCard2 from "./risen-christ/img2.jpg";
import imgCard3 from "./risen-christ/img3.jpg";
import imgCard4 from "./risen-christ/img4.jpg";

import Review from "./Review";

const RisenCrist = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="The Shrine of the Risen Christ" />
        <h1>The Shrine of the Risen Christ</h1>
        <h4>Brgy. Balicuatro</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Shrine of the Risen Christ in Brgy. Balicuatro are inspiring in
                their splendor and compelling in their significance as places of
                worship, meditation, and spiritually, located on a rock hill
                overlooking Lavezares Bay, was similarly chiseled by de los
                Reyes and funded by the Cuycos.
              </p>
              <p>
                Believer swear that the number and strength of raging storms
                that frequently battered the province in the past had been
                greatly reduced and weakened because of the giant religious
                sculptures that guard their shores, they may yet – spiritually
                and realistic.
              </p>

              <h5>Contact</h5>

              <p>
                For more information please contact the Municipal Tourism
                Officer – Rodel Cuyco at 09282972948
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
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section>
      <iframe
        title="Risen Christ map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.680052559179!2d124.31599931442825!3d12.549966991133484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMyJzU5LjkiTiAxMjTCsDE5JzA1LjUiRQ!5e0!3m2!1sen!2sph!4v1549940395418"
      />
    </section>
    <Review />
  </div>
);

export default RisenCrist;
