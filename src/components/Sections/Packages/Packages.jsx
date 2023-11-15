/** @format */

import React, { Component } from 'react'
import { Container, Row, CardColumns, Badge } from 'reactstrap'
import CardTour from '../../Card/CardTour'
import imgCard1 from '../../../assets/images/img-card (1).jpg'
import imgCard2 from '../../../assets/images/img-card (2).jpg'
import imgCard3 from '../../../assets/images/img-card (3).jpg'
import imgCard4 from '../../../assets/images/img-card (4).jpg'
import imgCard5 from '../../../assets/images/img-card (5).jpg'
import imgCard6 from '../../../assets/images/img-card (6).jpg'
import imgCard7 from '../../../assets/images/img-card (7).jpg'
import imgCard8 from '../../../assets/images/img-card (8).jpg'
import imgCard9 from '../../../assets/images/img-card (9).jpg'
import imgBarobaybay from '../../../assets/images/barobaybay.jpg'
import './Packages.css'

const tours = [
    {
      id: 1,
      category: ["resort", "honeymoon"],
      img: imgCard1,
      alt: "blah blah",
      title: "Seaside Resort",
      subtitle: "Batangas Resort"
    },
    {
      id: 2,
      category: ["beach", "mountain"],
      img: imgCard2,
      alt: "blah blah",
      title: "Isla de Gigantes",
      subtitle: "Carles, Iloilo"
    },
    {
      id: 3,
      category: ["resort", "honeymoon"],
      img: imgCard3,
      alt: "blah blah",
      title: "The Farm",
      subtitle: "San Benito, Batangas"
    },
    {
      id: 4,
      category: ["climbing", "mountain"],
      img: imgCard4,
      alt: "blah blah",
      title: "Poog",
      subtitle: "Cebu"
    },
    {
      id: 5,
      category: ["resort", "honeymoon", "beach"],
      img: imgCard5,
      alt: "blah blah",
      title: "Koro Sun Resort & Rainforest Spa",
      subtitle: "Vanua Levu, Fiji"
    },
    {
      id: 6,
      category: ["climbing", "mountain"],
      img: imgCard6,
      alt: "blah blah",
      title: "Pi Shan",
      subtitle: "Yangshuo China"
    },
    {
      id: 7,
      category: ["beach", "climbing"],
      img: imgCard7,
      alt: "blah blah",
      title: "El-Nido",
      subtitle: "Palawan"
    },
    {
      id: 8,
      category: ["honeymoon", "beach", "resort"],
      img: imgCard8,
      alt: "blah blah",
      title: "Shangri-La’s Boracay Resort and Spa",
      subtitle: "Boracay Resort"
    },
    {
      id: 9,
      category: ["beach", "resort"],
      img: imgCard9,
      alt: "blah blah",
      title: "HUMANA Island Resort & Spa",
      subtitle: "Palawan"
    },
    {
      id: 10,
      category: ["camping", "beach"],
      img: imgBarobaybay,
      alt: "camping in the lake",
      title: "Barobaybay Camp Site",
      subtitle: "Barobaybay, Lavezares N. Samar"
    }
];

const itemCategories = [
    'all',
    'beach',
    'mountain',
    'resort',
    'climbing',
    'camping',
    'honeymoon',
]

class Packages extends Component {
    state = {
        cards: [],
        category: 'all',
    }

    componentDidMount() {
        this.setState({ cards: tours })
    }

    render() {
        const { cards, category } = this.state
        return (
            <section className='packages'>
                <div className='packages__container'>
                    <div className='packages__subComponent-lg' id='packageBody'>
                        <Container>
                            <header className='packages__header'>
                                <h1 className='packages__title'>Tour Packages</h1>
                                <p>A Great Collection of Our Tour Packages</p>
                            </header>
                            <section className='packages__body'>
                                <div className="packages__filter">
                                    {itemCategories.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            href=''
                                            color={
                                                badge === category
                                                    ? 'dark'
                                                    : 'light'
                                            }
                                            onClick={() =>
                                                this.setState({ category: badge })
                                            }
                                            className='packages__badge'
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                                <Row className='packages__destines'>
                                    <CardColumns>
                                        {category !== 'all'
                                            ? cards.map((tourcard) => {
                                                  return tourcard.category.map(
                                                      (catItem) => {
                                                          return catItem ===
                                                              category ? (
                                                              <CardTour
                                                                  key={
                                                                      tourcard.id
                                                                  }
                                                                  tourcard={
                                                                      tourcard
                                                                  }
                                                                  className='packages__cardTour'
                                                              />
                                                          ) : null
                                                      },
                                                  )
                                              })
                                            : cards.map((tourcard) => (
                                                  <CardTour
                                                      key={tourcard.id}
                                                      tourcard={tourcard}
                                                      className='packages__CardTour'
                                                  />
                                              ))}
                                    </CardColumns>
                                </Row>
                            </section>
                        </Container>
                    </div>
                </div>
            </section>
        )
    }
}

export default Packages
