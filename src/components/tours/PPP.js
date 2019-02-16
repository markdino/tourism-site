import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./ppp/img1.jpg";
import imgCard2 from "./ppp/img2.jpg";
import imgCard3 from "./ppp/img3.jpg";
import imgCard4 from "./ppp/img4.jpg";
import imgCard5 from "./ppp/img5.jpg";

import Review from "./Review";

const PPP = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Chiara's & Clyde Resort</h1>
        <h4>Cataogan</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                <strong>Entrance:</strong> <br />
                60/head from 7:00 am to 5:00 pm <br />
                100/head from 6:00 pm to 12:00 mn (must be settled by resort
                personnel) <br />
              </p>
              <ul>
                <li>Proper swimwear is required at all times.</li>
                <li>
                  Swimmers are requested to shower before using the swimming
                  pool.
                </li>
                <li>No horseplay of rough play is allowed.</li>
                <li>No glass receptacles are allowed the pool area.</li>
                <li>
                  The pool will be close during heavy rain, thunderstorm and
                  lightning.
                </li>
                <li>
                  Do not leave things valuables unattended. The resort will not
                  be responsible for losses of damages of guest's belongings.
                </li>
                <li>Guest using the pool do so at their own risk.</li>
                <li>
                  Guest with skin infection are required not to use the swimming
                  pool health and safety consideration.
                </li>
              </ul>

              <h5>Contact</h5>

              <p>For more information contact at 0915 384 2114</p>
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
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section>
      <iframe
        title="Chiara's & Clyde Resort"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7970.105685539503!2d124.33176356144732!3d12.539291655339898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4974186bacea38de!2sChiara&#39;s+and+Clyde+Resort!5e0!3m2!1sen!2sph!4v1550324884074"
      />
    </section>
    <Review />
  </div>
);

export default PPP;
