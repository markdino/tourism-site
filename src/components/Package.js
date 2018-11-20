import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge
} from "reactstrap";
import "../App.css";
import beach from "../img/beach.jpg";
import resort from "../img/resort.jpg";
import camp from "../img/camp.jpg";
import mountain from "../img/mountain.jpg";
import gulp from "../img/gulp.jpg";

class Package extends React.Component {
  render() {
    return (
      <div>
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
            <Row>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={beach} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={gulp} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={resort} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={mountain}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={camp} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
