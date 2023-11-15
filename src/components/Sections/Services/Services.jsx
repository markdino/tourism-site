/** @format */

import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Services.scss'

import { ReactComponent as Trending } from '../../../assets/svg/trending-up.svg'
import { ReactComponent as Flag } from '../../../assets/svg/flag.svg'
import { ReactComponent as Monitor } from '../../../assets/svg/monitor.svg'
import { ReactComponent as MapPin } from '../../../assets/svg/map-pin.svg'

class Services extends Component {
    render() {
        return (
            <div className='services'>
                <div className='services__wrapped'>
                    <div className='services__subComponent' id='servicesBody'>
                        <Container>
                            <section className='services__svg-group text-center'>
                                <Row>
                                    <Col lg='3' md='6' sm='6'>
                                        <div className='services__svg-card'>
                                            <Trending
                                                width='50'
                                                height='55'
                                                strokeWidth='1'
                                                className='services__svg-icon'
                                            />
                                            <p>Promote Best Tours</p>
                                        </div>
                                    </Col>
                                    <Col lg='3' md='6' sm='6'>
                                        <div className='services__svg-card'>
                                            <Monitor
                                                width='55'
                                                height='55'
                                                strokeWidth='1'
                                                className='services__svg-icon'
                                            />
                                            <p>Showcase Tourist Spot</p>
                                        </div>
                                    </Col>
                                    <Col lg='3' md='6' sm='6'>
                                        <div className='services__svg-card'>
                                            <Flag
                                                width='55'
                                                height='55'
                                                strokeWidth='1'
                                                className='services__svg-icon'
                                            />
                                            <p>Best Travel Routes</p>
                                        </div>
                                    </Col>
                                    <Col lg='3' md='6' sm='6'>
                                        <div className='services__svg-card'>
                                            <MapPin
                                                width='55'
                                                height='55'
                                                strokeWidth='1'
                                                className='services__svg-icon'
                                            />
                                            <p>Tour Guides</p>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
