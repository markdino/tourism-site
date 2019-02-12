import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import lalaguna from "./tours/lalaguna-bay-mangrove-forest/img1.jpg";
import imgtabok from "./tours/tabok/img1.jpg";
import landmark from "./tours/landmark/img1.jpg";
import imgMarson from "./tours/marson/cover.jpg";
import imgCagomaoas from "./tours/cagomaoas/img1.jpg";

const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon", "beach", "camping", "scape"],
    img: imgMarson,
    alt: "blah blah",
    title: "Marson's Beach Resort - Villa Patria",
    subtitle: "Bani Island",
    router: "marson"
  },
  {
    id: 2,
    category: ["beach", "camping", "honeymoon", "resort"],
    img: imgtabok,
    alt: "blah blah",
    title: "Tabok Beach Camping & Diving Resort",
    subtitle: "Martinez Family",
    router: "tabok"
  },
  {
    id: 3,
    category: ["scape"],
    img: landmark,
    alt: "blah blah",
    title: "Landmark of the Risen Jesus (Nuestra Señora de Salvacion Statue)",
    subtitle: "Lavezares landmark",
    router: "landmark"
  },
  {
    id: 4,
    category: ["scape"],
    img: lalaguna,
    alt: "blah blah",
    title: "Lalaguna Bay Mangrove Forest",
    subtitle: "San Isidro",
    router: "lalaguna"
  },
  {
    id: 5,
    category: ["resort"],
    img: imgCagomaoas,
    alt: "blah blah",
    title: "Cagumao-as Leisure Farm",
    subtitle: "Villahermosa",
    router: "cagumao-as"
  }
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon",
  "scape"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Collection</h1>
            <p>A Great Collection of Our Tours</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                      return tourcard.category.map(catItem => {
                        return catItem === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard} />
                        ) : null;
                      });
                    })
                  : cards.map(tourcard => (
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
