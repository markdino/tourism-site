/** @format */

import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Services.css'

import { ReactComponent as Trending } from '../../../assets/svg/trending-up.svg'
import { ReactComponent as Flag } from '../../../assets/svg/flag.svg'
import { ReactComponent as Monitor } from '../../../assets/svg/monitor.svg'
import { ReactComponent as MapPin } from '../../../assets/svg/map-pin.svg'
import CardService from '../../Card/CardService/CardService'

class Services extends Component {
    render() {
        return (
            <div className='services'>
                <div className='services__container'>
                    <Container>
                        <section className='services__svg-group svg-group text-center'>
                            <Row>
                                <CardService
                                    classname='services__card'
                                    icon={
                                        <Trending
                                            width='50'
                                            height='55'
                                            strokeWidth='1'
                                            className='services__svg-icon'
                                        />
                                    }
                                    text='Promote Best Tours'
                                />
                                <CardService
                                    classname='services__card'
                                    icon={
                                        <Monitor
                                            width='55'
                                            height='55'
                                            strokeWidth='1'
                                            className='services__svg-icon'
                                        />
                                    }
                                    text='Showcase Tourist Spote'
                                />
                                <CardService
                                    classname='services__card'
                                    icon={
                                        <Flag
                                            width='55'
                                            height='55'
                                            strokeWidth='1'
                                            className='services__svg-icon'
                                        />
                                    }
                                    text='Best Travel Route'
                                />
                                <CardService
                                    classname='services__card'
                                    icon={
                                        <MapPin
                                            width='55'
                                            height='55'
                                            strokeWidth='1'
                                            className='services__svg-icon'
                                        />
                                    }
                                    text='Tour Guides'
                                />
                            </Row>
                        </section>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Services
