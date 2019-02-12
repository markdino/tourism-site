import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCover from "./bangkawan/cover.jpg";
import imgCard1 from "./bangkawan/img1.jpg";
import imgCard2 from "./bangkawan/img2.jpg";
import imgCard3 from "./bangkawan/img3.jpg";
import imgCard4 from "./bangkawan/img4.jpg";
import imgCard5 from "./bangkawan/img5.jpg";
import imgCard6 from "./bangkawan/img6.jpg";
import imgCard7 from "./bangkawan/img7.jpg";
import imgCard8 from "./bangkawan/img8.jpg";
import imgCard9 from "./bangkawan/img9.jpg";
import imgCard10 from "./bangkawan/img10.jpg";

import Review from "./Review";

const Bangkawan = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCover} alt="" />
        <h1>Bangkawan Cove & Camping Resort</h1>
        <h4>Bangkawan Island</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Is a small family private island it is located near villa
                lavezares northern samar it is a typically beautiful beach
                destination, as to find the water and sand to be the most
                replenishing it is also ideal for diving and snorkeling but the
                tourist have to navigate some dirt roads with habal-habal just
                to get there.
              </p>
              <p>
                BANKAWAN Island Camping Resort is now OPEN. <br />
                Location: Bankawan Island, Lavezares, Northern Samar The closest
                island from mainland Lavezares for less than 30 minutes only
                from the town center.
              </p>

              <h5>Contact</h5>

              <p>For more info contact #09107595168</p>
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
              <a href={imgCard5}>
                <img src={imgCard5} alt="" />
              </a>
              <a href={imgCard6}>
                <img src={imgCard6} alt="" />
              </a>
              <a href={imgCard7}>
                <img src={imgCard7} alt="" />
              </a>
              <a href={imgCard8}>
                <img src={imgCard8} alt="" />
              </a>
              <a href={imgCard9}>
                <img src={imgCard9} alt="" />
              </a>
              <a href={imgCard10}>
                <img src={imgCard10} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section>
      <iframe
        title="Bangkawan Island"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.416985833421!2d124.3541513146001!3d12.554733227285562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMzJzE3LjAiTiAxMjTCsDIxJzIyLjgiRQ!5e0!3m2!1sen!2sph!4v1549949557496"
      />
    </section>
    <Review />
  </div>
);

export default Bangkawan;
