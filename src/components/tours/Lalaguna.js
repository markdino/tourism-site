import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./lalaguna-bay-mangrove-forest/img1.jpg";
import imgCard2 from "./lalaguna-bay-mangrove-forest/img2.jpg";
import imgCard3 from "./lalaguna-bay-mangrove-forest/img3.jpg";
import imgCard4 from "./lalaguna-bay-mangrove-forest/img4.jpg";

const Lalaguna = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Lalaguna Bay Mangrove Forest</h1>
        <h4>San Isidro</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Is one of the must-visit attractions in Lavezares. A marine
                protected area located in an island Barangay of San Isidro.
              </p>
              <p>
                Lalaguna is a perfect site for bird watching as it hosts to
                several species of migratory birds. Bats are also present. In
                order to explore the mangrove forest and get a beautiful spot
                for bird watching, you can ride a small boat or paddle boat to
                enter the nooks and niches of Lalaguna.
              </p>
              <p>
                The La Laguna Eco-Park, a bay surrounding the islands of San
                Isidro, Maravilla and San Juan, is described by local residents
                as their town’s last frontier. The lagoon is surrounded by a
                vast and marine-rich mangrove forest, growing from crystal clear
                waters where marine life spawn and spring.
              </p>
              <h5>How to get there</h5>
              <p>
                From Manila, you can ride a bus (about 15 hours) with RORO
                vessels from Matnog, Sorsogon going to the port of Allen in
                Northern Samar.
              </p>
              <p>
                Or from manila, you can fly to Catarman (estimated cost
                Php2,400++, round trip, 1 hour 25 minutes). From Catarman
                airport, you can ride a tricycle or jeepney to get to town of
                Lavezares.
              </p>
              <p>
                For more information contact DOT Eastern Visayas office at (053)
                832-0901
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
        title="lalaguna map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124720.3736243647!2d124.32398977986037!3d12.348620103390477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a74e2af321ab1d%3A0xd44779aa831f04ec!2sSan+Isidro%2C+Northern+Samar!5e0!3m2!1sen!2sph!4v1547259729662"
      />
    </section>
    <Review />
  </div>
);

export default Lalaguna;
