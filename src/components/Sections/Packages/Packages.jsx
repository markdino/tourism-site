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
    // ... (o resto do seu código permanece inalterado)
]

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
                            <header className='packages__headerTitle'>
                                <h1>Tour Packages</h1>
                                <p>A Great Collection of Our Tour Packages</p>
                            </header>
                            <section className='packages__packageBody'>
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

                                <Row className='packages__text-left'>
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
                                                                  className='packages__CardTour'
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
