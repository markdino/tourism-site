/** @format */

import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import '../App.css'
import Footer from '../components/Footer/Footer'
import HeadlineTour from '../components/Sections/Headline/HeadlineTour'
import Article from '../components/Sections/Article'

class Tour extends Component {
    render() {
        return (
            <>
                <div className='subComponent'>
                    <HeadlineTour />
                    <Article />

                    <section className='reviews'>
                        <Container>
                            <section className='tour-msg text-center'>
                                <h1>Reviews and Suggestions</h1>
                                <p>We're glad to hear something from you.</p>
                                <form action=''>
                                    <Row>
                                        <Col sm='6'>
                                            <input
                                                type='text'
                                                name='Name'
                                                id='reviewer-name'
                                                placeholder='Your Name'
                                                required
                                            />
                                            <br />
                                            <input
                                                type='email'
                                                name='Email'
                                                id='reviewer-email'
                                                placeholder='Your email'
                                                required
                                            />
                                        </Col>
                                        <Col>
                                            <textarea
                                                name='Message'
                                                id='reviewer-message'
                                                rows='4'
                                                placeholder='Your Message'
                                            />
                                        </Col>
                                    </Row>
                                    <Button
                                        outline
                                        color='secondary'
                                        className='float-right'
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </section>
                        </Container>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
}

export default Tour
