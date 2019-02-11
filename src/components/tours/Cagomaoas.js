import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./cagomaoas/img1.jpg";
import imgCard2 from "./cagomaoas/img2.jpg";
import imgCard3 from "./cagomaoas/img3.jpg";

import Review from "./Review";

const Cagomaoas = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Cagumao-as Leisure Farm</h1>
        <h4>Villahermosa</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                FEEL the soothingly COOL and REFRESHING natural spring WATERS
                and calming lush GREENERIES that defy summer's scorching heat at
                the CAGUMAO-AS LEISURE FARM, LAVEZARES, N. Samar.
              </p>
              <p>Great place to bond with your family and friends.</p>
              <p>Just 2km away from the Town Center.</p>
              <p>
                Entrance Fee: <br />
                Adults - Php30.00 <br />
                Kids-Php20.00 <br />
              </p>
              <p>Cottage Rental: Php150.00</p>
              <h5>Contact</h5>

              <p>For more information contact Efren @ 09462566104</p>
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
        title="CAGUMAO-AS LEISURE FARM map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.327877056548!2d124.31438242923832!3d12.544571174768635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMyJzQwLjQiTiAxMjTCsDE4JzU5LjYiRQ!5e1!3m2!1sen!2sph!4v1549894723870"
      />
    </section>
    <Review />
  </div>
);

export default Cagomaoas;
