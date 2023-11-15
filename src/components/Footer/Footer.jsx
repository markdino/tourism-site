/** @format */

import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Footer.scss'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg'

class Footer extends Component {
    render() {
        return (
            <div className='footer subComponent-lg' id='footerBody'>
                <Container>
                    <header className='footer__header text-center'>
                        <p>
                            <b>CAN'T WAIT TO GET INVOLVED</b>
                        </p>
                        <p>
                            <b>CONNECT WITH US NOW</b>
                        </p>
                    </header>
                    <footer className='footer__content text-center'>
                        <Row>
                            <Col md='3' xs='6'>
                                <div className='footer__social-card'>
                                    <a href='#'>
                                        <FacebookIcon
                                            width='50'
                                            height='55'
                                            strokeWidth='1'
                                            className='footer__social-icon'
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col md='3' xs='6'>
                                <div className='footer__social-card'>
                                    <a href='#'>
                                        <TwitterIcon
                                            width='55'
                                            height='55'
                                            strokeWidth='1'
                                            className='footer__social-icon'
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col md='3' xs='6'>
                                <div className='footer__social-card'>
                                    <a href='#'>
                                        <LinkedinIcon
                                            width='55'
                                            height='55'
                                            strokeWidth='1'
                                            className='footer__social-icon'
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col md='3' xs='6'>
                                <div className='footer__social-card'>
                                    <a href='#'>
                                        <InstagramIcon
                                            width='55'
                                            height='55'
                                            strokeWidth='1'
                                            className='footer__social-icon'
                                        />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <p>copyright 2019 | Manila Tourism Philippines</p>
                    </footer>
                </Container>
            </div>
        )
    }
}

export default Footer
