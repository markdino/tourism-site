import React, { Component } from "react";
import {
  Container,
  Row,
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";
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

class Package extends Component {
  render() {
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
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard1}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard2}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard3}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard4}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard5}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard6}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard7}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard8}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={imgCard9}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <Button color="secondary" className="float-right">
                      Read more
                    </Button>
                  </CardBody>
                </Card>
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
