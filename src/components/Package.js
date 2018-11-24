import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";

const tours = [
  {
    id: 1,
    img: imgCard1,
    alt: "blah blah",
    title: "Marsan",
    subtitle: "white Beach"
  },
  {
    id: 2,
    img: imgCard2,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 3,
    img: imgCard3,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 4,
    img: imgCard4,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 5,
    img: imgCard5,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 6,
    img: imgCard6,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 7,
    img: imgCard7,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 8,
    img: imgCard8,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  },
  {
    id: 9,
    img: imgCard9,
    alt: "blah blah",
    title: "Tabok",
    subtitle: "white Beach"
  }
];

class Package extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="subComponent">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            <Badge href="#" color="dark">
              All
            </Badge>
            <Badge href="#" color="light">
              Beach
            </Badge>
            <Badge href="#" color="light">
              Mountain
            </Badge>
            <Badge href="#" color="light">
              Resort
            </Badge>
            <Badge href="#" color="light">
              Camping
            </Badge>
            <Badge href="#" color="light">
              Honeymoon
            </Badge>
            <Row className="text-left">
              <CardColumns md="4" sm="6">
                {cards.map(tourcard => (
                  <TourCard key={tourcard.id} tourcard={tourcard} />
                ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
