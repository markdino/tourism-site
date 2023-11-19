/** @format */

import React, { Component } from 'react'
import './Reviews.css'
import { Row, Col, Container, Button } from 'reactstrap'

class Reviews extends Component {
    render() {
        return (
            <section className='reviews'>
                <Container className='reviews__container'>
                    <header className='reviews__header'>
                        <h1>Reviews and Suggestions</h1>
                        <p>We're glad to hear something from you.</p>
                    </header>
                    <div className='reviews__contact tour-msg text-center'>
                        <form action='' className='reviews__form'>
                            <Row className='reviews__row'>
                                <Col sm='6' className='reviews__col'>
                                    <input
                                        type='text'
                                        name='Name'
                                        id='reviewer-name'
                                        placeholder='Your Name'
                                        required
                                        className='reviews__input'
                                    />
                                    <br />
                                    <input
                                        type='email'
                                        name='Email'
                                        id='reviewer-email'
                                        placeholder='Your email'
                                        required
                                        className='reviews__input'
                                    />
                                </Col>
                                <Col className='reviews__col'>
                                    <textarea
                                        name='Message'
                                        id='reviewer-message'
                                        rows='4'
                                        placeholder='Your Message'
                                        className='reviews__input'
                                    />
                                </Col>
                            </Row>
                            <Button
                                outline
                                color='secondary'
                                className='float-right reviews__send reviews__row'
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Reviews
