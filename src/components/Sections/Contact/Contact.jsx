/** @format */

import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import './Contact.css'
import { ReactComponent as Phone } from '../../../assets/svg/phone.svg'
import { ReactComponent as MapPin } from '../../../assets/svg/map-pin.svg'
import { ReactComponent as Mail } from '../../../assets/svg/mail.svg'

class Contact extends Component {
    render() {
        return (
            <section className='contact'>
                <Container className='contact__container'>
                    <Row className='contact__header'>
                        <h1 className='contact__title contact__title'>
                            Contact
                        </h1>
                        <p className='contact__description'>
                            GET IN TOUCH WITH US
                        </p>
                    </Row>
                    <Row lg='6' md='6' className='contact__content'>
                        <Col lg='3' md='3' className='contact__card'>
                            <Phone width='50' height='55' strokeWidth='1' />
                            <p>0912 345 6789</p>
                        </Col>
                        <Col lg='3' md='3' className='contact__card'>
                            <Mail width='55' height='55' strokeWidth='1' />
                            <p>manilatourism@manila.ph</p>
                        </Col>
                        <Col lg='3' md='3' className='contact__card'>
                            <MapPin width='55' height='55' strokeWidth='1' />
                            <p>Manila City, Philippines</p>
                        </Col>
                        <Col lg='3' md='3' className='contact__card'>
                            <Mail width='55' height='55' strokeWidth='1' />
                            <p>manilatourism@manila.ph</p>
                        </Col>
                    </Row>
                    <Row lg='6' md='6' className='contact__content'>
                        <Row className='contact__form'>
                            <h4 className='contact__subtitle'>
                                Doubt? Send us a message
                            </h4>
                            <form action='' className='contact__entry'>
                                <input
                                    type='text'
                                    name='Name'
                                    id='reviewer-name'
                                    placeholder='Your Name'
                                    required
                                    className='contact__input'
                                />
                                <input
                                    type='email'
                                    name='Email'
                                    id='reviewer-email'
                                    placeholder='Your email'
                                    required
                                    className='contact__input'
                                />
                                <textarea
                                    name='Message'
                                    id='reviewer-message'
                                    rows='4'
                                    placeholder='Your Message'
                                    className='contact__input'
                                />
                                <Button
                                    outline
                                    color='light'
                                    className='contact__button float-left'
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Row>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Contact
