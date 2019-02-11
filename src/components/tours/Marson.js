import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import imgCover from "./marson/cover.jpg";
import imgCard1 from "./marson/img1.jpg";
import imgCard2 from "./marson/img2.jpg";
import imgCard3 from "./marson/img3.jpg";
import imgCard4 from "./marson/img4.jpg";
import imgCard5 from "./marson/img5.jpg";
import imgCard6 from "./marson/img6.jpg";
import imgCard7 from "./marson/img7.jpg";
import imgCard8 from "./marson/img8.jpg";
import imgCard9 from "./marson/img9.jpg";
import imgCard10 from "./marson/img10.jpg";
import imgCard11 from "./marson/img11.jpg";
import imgCard12 from "./marson/img12.jpg";
import imgCard13 from "./marson/img13.jpg";
import imgCard14 from "./marson/img14.jpg";
import imgCard15 from "./marson/img15.jpg";

const Marson = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCover} alt="" />
        <h1>Marson's Beach Resort - Villa Patria </h1>
        <h4>Bani Island</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Set against the magnificent golden sunset of the horizon, dive
                in with your friends in the crystal clear water and experience
                the fine white sand below your feets here in Marson's Beach
                Resort located at Lavezares, Northern Samar. It's simple in
                style and quality but you can see that it's still in
                development. It is one of the less visited resorts in the island
                because it is in a secluded area, far from the northern beaches
                of Lavezares, Northern Samar, about 8 kilometers from the main
                road and . But once you reach Marson's Beach Resort, you will be
                pleased by the relaxing ambiance and wonderful trees that
                surrounds it. Marson's Beach Resort is situated in Brgy.
                Barobaybay, Bani Island, Lavezares, Northern Samar. It is about
                5-7 minutes away from the seaport of Brgy. Barobaybay and about
                40-50 minutes from main town of Catarman. The resort offers
                Cottages at a decent price for twin-sharing. They have multiple
                cottages so reservation ahead of time is a must to avoid being
                denied or passed to other resorts especially during Summer and
                Holy Week. Marson's Beach Resort also offers volleyball and
                badminton court for ₱20/hour. The maximum allowed occupancy per
                cottage is depends on the package availed. The entrance to the
                resort is only available for those who will be paying one
                cottage. Swimming is at best during low-tide and high-tide so be
                sure to check the local calendar or any crew for the
                low-tide/high-tide time. Marson's Beach Resort also offers a
                service car, motorboats and outriggers to guests at an
                affordable price. This will be used as transportation going to
                the different nearby islands and attractions in Biri, Northern
                Samar which will take only an hour or less depending on the
                speed of the boat. There are rooms, cottages, beach volleyball
                court, and life preserver available for rent for those who want
                will avail the package. *Prices may vary upon negotiation. Get a
                reservation now!
              </p>
              <p>SUMMER PROMO!!!</p>
              <p>Entrance fee is 20 PHP</p>
              <p>
                350 PHP - Beach Cottage <br />
                700 PHP - Function Cottage <br />
                150 PHP - Umbrella <br />
                500 PHP - Love Nest room (Good for 2 persons) <br />
                1000 PHP - Room w/ Fan & C.R (Good for 3-5 persons) <br />
              </p>

              <h5>Contact</h5>

              <p>
                For reservations please contact: <br />
                Mark M. Mijares / 09175979900
              </p>
              <p>
                or message us on Facebook for more info. <br />
                <a href="http://www.facebook.com/MarsonsBeachResort">
                  MarsonsBeachResort
                </a>
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
              <a href={imgCard15}>
                <img src={imgCard15} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section>
      <iframe
        title="Marson's Beach Resort map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4967.8877531205935!2d124.36346766285253!3d12.561857973790744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0a351a662d45ef4!2sMarsons&#39;+Beach+Resort!5e0!3m2!1sen!2sph!4v1549541818914"
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

export default Marson;
