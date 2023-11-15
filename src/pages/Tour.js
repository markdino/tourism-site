/** @format */

import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import '../App.css'
// import tours from "../components/Package";
import imgCard1 from '../assets/images/img-card (1).jpg'
import imgCard2 from '../assets/images/img-card (2).jpg'
import imgCard3 from '../assets/images/img-card (3).jpg'
import imgCard4 from '../assets/images/img-card (4).jpg'

const Tour = () => (
    <div className='subComponent'>
        <section className='tour-cover item-center'>
            <img src={imgCard1} alt='' />
        </section>
        <Container>
            <section className='tour-info article__content'>
                <h1 className='article__title'>Seaside Resort</h1>
                <h4 className='article__subtitle'>Batangas Resort</h4>
                <Row className="article__row">
                    <Col sm='5'>
                        <div className='article__desc'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In imperdiet, sem id vehicula
                                lacinia, mi purus lacinia mauris, vitae mollis
                                nisl elit in lorem. Suspendisse potenti. Cras
                                elementum u
                            </p>
                            <p>
                                Morbi facilisis, odio vitae egestas pretium,
                                mauris tortor vulputate dolor, non interdum nunc
                                tellus at dolor. Donec condimentum et augue
                                vitae volutpat. Fusce vitae laoreet sem. Integer
                                a justo sit amet nibh vehicula blandit.
                                Suspendisse faucibus venenatis egestas. In
                                vulputa
                            </p>
                        </div>
                    </Col>
                    <Col sm='7'>
                        <div className='tour-gallery'>
                            <a href={imgCard2}>
                                <img src={imgCard2} alt='' />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="article__row">
                    <Col sm='3'>
                        <div className='article__desc'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In imperdiet, sem id vehicula
                                lacinia, mi purus lacinia mauris, vitae mollis
                                nisl eli
                            </p>
                            <p>
                                Morbi facilisis, odio vitae egestas pretium,
                                mauris tortor vulputate dolor, non interdum nunc
                                tellus at dolor. Donec condimentum et augue
                                vitae volutpat. Fusce vitae laoreet sem. Integer
                                a justo sit amet nibh vehicula blandit.
                                Suspendisse fau
                            </p>
                        </div>
                    </Col>
                    <Col sm='9'>
                        <div className='tour-gallery'>
                            <a href={imgCard1}>
                                <img src={imgCard3} alt='' />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="article__row">
                    <Col sm='3'>
                        <div className='article__desc'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In imperdiet, sem id vehicula
                                lacinia, mi purus lacinia mauris, vitae mollis
                                nisl elit in lorem. Suspendisse potenti. Cras
                                elementum u
                            </p>
                            <p>
                                Morbi facilisis, odio vitae egestas pretium,
                                mauris tortor vulputate dolor, non interdum nunc
                                tellus at dolor. Donec condimentum et augue
                                vitae volutpat. Fusce vitae laoreet sem. Integer
                                a justo sit amet nibh vehicula blandit.
                                Suspendisse faucibus venenatis egestas. In
                                vulputa
                            </p>
                        </div>
                    </Col>
                    <Col sm='9'>
                        <div className='tour-gallery'>
                            <a href={imgCard2}>
                                <img src={imgCard4} alt='' />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='3'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                    <Col md='3'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                    <Col md='3'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                    <Col md='3'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                </Row>
            </section>
        </Container>
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
)

export default Tour
