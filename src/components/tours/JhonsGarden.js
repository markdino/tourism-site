import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCover from "./jhons-garden/cover.jpg";
import imgCard1 from "./jhons-garden/img1.jpg";
import imgCard2 from "./jhons-garden/img2.jpg";
import imgCard3 from "./jhons-garden/img3.jpg";
import imgCard4 from "./jhons-garden/img4.jpg";
import imgCard5 from "./jhons-garden/img5.jpg";
import imgCard6 from "./jhons-garden/img6.jpg";
import imgCard7 from "./jhons-garden/img7.jpg";
import imgCard8 from "./jhons-garden/img8.jpg";
import imgCard9 from "./jhons-garden/img9.jpg";
import imgCard10 from "./jhons-garden/img10.jpg";
import imgCard11 from "./jhons-garden/img11.jpg";
import imgCard12 from "./jhons-garden/img12.jpg";
import imgCard13 from "./jhons-garden/img13.jpg";
import imgCard14 from "./jhons-garden/img14.jpg";
import imgMap from "./jhons-garden/map.jpg";

import Review from "./Review";

const JhonsGarden = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCover} alt="" />
        <h1>Jhon's Garden</h1>
        <h4>Brgy. Barobaybay</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                A place to simply relax, a nature's view to enjoy in different
                colors, fresh air that will play the strands of your hair, the
                sweet tweets of birds can be heard, the lovely butterflies are
                roaming around; these are present in Jhon's Garden
              </p>
              <p>
                With the green thumb of Jhon to do the landscape, the beauty of
                coleus plants are amazingly wonderful! Have a visit, have a
                look, enjoy the scenery, and be in love in the garden. This is
                the place you would love to go for unwinding yourself. See and
                experience for yourself!
              </p>
              <p>
                <img
                  src={imgMap}
                  alt="Jhon's Garden Map"
                  align="left"
                  width="50%"
                  style={{ marginRight: 10 + "px" }}
                />
                The garden is situated at the heart of Brgy. Barobaybay,
                Lavezares, Northern Samar. You are warmly welcome!
              </p>
              <h5>Contact</h5>

              <p>For more info contact #0910 046 6748</p>
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
              <a href={imgCard11}>
                <img src={imgCard11} alt="" />
              </a>
              <a href={imgCard12}>
                <img src={imgCard12} alt="" />
              </a>
              <a href={imgCard13}>
                <img src={imgCard13} alt="" />
              </a>
              <a href={imgCard14}>
                <img src={imgCard14} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section>
      <iframe
        title="Bangkawan Island"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.457562178132!2d124.36368924985705!3d12.55205230535371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65925ae0e1b83b82!2sJhon&#39;s+Garden!5e0!3m2!1sen!2sph!4v1549953331699"
      />
    </section>
    <Review />
  </div>
);

export default JhonsGarden;
