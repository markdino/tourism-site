/** @format */

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import LocationsCarousel from './Components/LocationsCarousel'
import { ReactComponent as Award } from '../../../assets/svg/award.svg'
import { ReactComponent as Shield } from '../../../assets/svg/shield.svg'
import { ReactComponent as Compass } from '../../../assets/svg/compass.svg'
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg'
import './AboutTravel.css'

const AboutTravel = () => {
    return (
        <section className='aboutTravel'>
            <div className='aboutTravel__container'>
                <div id='about'>
                    <LocationsCarousel />

                    <div className='subComponent' id='aboutBody'>
                        <Container>
                            <header className='headerTitle'>
                                <h1 className='aboutTravel__title'>
                                    About Travel
                                </h1>
                                <p>Tour Guide & Private Guided Tours</p>
                            </header>
                            <section className='svg-group text-center subComponent'>
                                <Row className='aboutTravel__cards'>
                                    <Col
                                        className='aboutTravel__card'
                                        lg='3'
                                        md='6'
                                        sm='6'
                                    >
                                        <div className='svg-card'>
                                            <Award
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                            <p>Best Price Guarantee</p>
                                        </div>
                                    </Col>
                                    <Col
                                        className='aboutTravel__card'
                                        lg='3'
                                        md='6'
                                        sm='6'
                                    >
                                        <div className='svg-card'>
                                            <Shield
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                            <p>Trust and Safety</p>
                                        </div>
                                    </Col>
                                    <Col
                                        className='aboutTravel__card'
                                        lg='3'
                                        md='6'
                                        sm='6'
                                    >
                                        <div className='svg-card'>
                                            <Heart
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                            <p>Best Travel Agent</p>
                                        </div>
                                    </Col>
                                    <Col
                                        className='aboutTravel__card'
                                        lg='3'
                                        md='6'
                                        sm='6'
                                    >
                                        <div className='svg-card'>
                                            <Compass
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                            <p>Travel Insurance</p>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTravel
