import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCard1 from "./tabok/img1.jpg";
import imgCard2 from "./tabok/img2.jpg";
import imgCard3 from "./tabok/img3.jpg";
import imgCard4 from "./tabok/img4.jpg";

const Tabok = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Tabok Beach Camping & Diving Resort</h1>
        <h4>Martinez Family</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Tabok is a private island owned by a “Martinez Family” It is
                said that it was a Vacation Island only for the family. But as
                the time goes by new generation of the family decided to put up
                a resort and open it to public. It is named TABOK because it is
                the visaya word for “to cross over” Means: You need to cross
                over the sea in order to reach the said island.
              </p>
              <p>
                TABOK Beach Resort has an entrance fee. For 12 years old and
                above the entrance fee is 20 pesos. And for 7 to 11 years old
                the entrance fee is 10 pesos. And for 6 years old and below the
                entrance fee is free.
              </p>
              <p>
                They offered a DAYTIME and OVERNIGHT cottage’s in able for the
                tourist to stay longer and to relax.
              </p>
              <p>
                They have a two different DAYTIME COTTAGE’S. The Cottage which
                made of tire tables and a tiles above, good for Groupings,
                Family and Friends. For 500 pesos. And the regular Cottage with
                two bench and one table good for Lovers and Married Couple. For
                500 pesos.
              </p>
              <p>
                The Over Night Cottage. Is a Triangular Shaped and they named it
                after a mountain here in the Philippines. For example the Mt.
                Makiling, Mt. Arayat, and etc. It cost 1,000 pesos and its a
                cottage for a 5 person only. With a bed and a pillow inside. And
                the Up and Down a maximum of 15 person can occupy. Cost 2,500
                for overnight stay.
              </p>
              <h5>Contact</h5>

              <p>
                For more information contact at 0915
                384 2114
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
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15577.147378278183!2d124.3706759!3d12.563328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c64d75259b07496!2sTabok+Beach+Camping+%26+Diving+Resort!5e0!3m2!1sen!2sph!4v1547261280197"
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

export default Tabok;
