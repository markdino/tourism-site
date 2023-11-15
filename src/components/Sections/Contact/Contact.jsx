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
            <div className='subComponent-lg' id='contactBody'>
                <Container>
                    <header className='headerTitle'>
                        <h1 className='contact__title'>Contact</h1>
                        <p>GET IN TOUCH WITH US</p>
                    </header>
                    <Row className='svg-group text-center'>
                        <Col lg='6' md='6'>
                            <Row lg='3' md='3' className='contact__card'>
                                <Phone width='50' height='55' strokeWidth='1' />
                                <p>0912 345 6789</p>
                            </Row>
                            <Row lg='3' md='3' className='contact__card'>
                                <Mail width='55' height='55' strokeWidth='1' />
                                <p>manilatourism@manila.ph</p>
                            </Row>
                            <Row lg='3' md='3' className='contact__card'>
                                <MapPin
                                    width='55'
                                    height='55'
                                    strokeWidth='1'
                                />
                                <p>Manila City, Philippines</p>
                            </Row>
                            <Row lg='3' md='3' className='contact__card'>
                                <Mail width='55' height='55' strokeWidth='1' />
                                <p>manilatourism@manila.ph</p>
                            </Row>
                        </Col>
                        <Col lg='6' md='6'>
                            <Row className='contact__form'>
                                <h4 className='contact__subtitle'>Send us</h4>
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
                        </Col>
                    </Row>
                    <br />
                    <section className='msg text-center'></section>
                </Container>
            </div>
        )
    }
}

export default Contact
