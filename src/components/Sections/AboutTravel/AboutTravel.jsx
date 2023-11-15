/** @format */

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import LocationsCarousel from './Components/LocationsCarousel'
import { ReactComponent as Award } from '../../../assets/svg/award.svg'
import { ReactComponent as Shield } from '../../../assets/svg/shield.svg'
import { ReactComponent as Compass } from '../../../assets/svg/compass.svg'
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg'
import CardAbout from '../../Card/CardAbout'
import './AboutTravel.css'

const AboutTravel = () => {
    return (
        <section className='aboutTravel'>
            <div className='aboutTravel__container'>
                <div id='about'>
                    {/* <LocationsCarousel /> */}

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
                                    <CardAbout
                                        classname='aboutTravel__card'
                                        icon={
                                            <Award
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                        }
                                        text='Best Price Guarantee'
                                    />
                                    <CardAbout
                                        classname='aboutTravel__card'
                                        icon={
                                            <Shield
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                        }
                                        text='Best Price Guarantee'
                                    />
                                    <CardAbout
                                        classname='aboutTravel__card'
                                        icon={
                                            <Heart
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                        }
                                        text='Best Price Guarantee'
                                    />
                                    <CardAbout
                                        classname='aboutTravel__card'
                                        icon={
                                            <Compass
                                                width='48'
                                                height='48'
                                                strokeWidth='1'
                                            />
                                        }
                                        text='Best Price Guarantee'
                                    />
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
