/** @format */

import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import imgCard1 from '../../../assets/images/img-card (1).jpg'
import imgCard2 from '../../../assets/images/img-card (2).jpg'

import './Article.css'

class Article extends Component {
    render() {
        return (
            <section className='tour-info article__content'>
                <Row className='article__container article__container--dark'>
                    <Row className='article__row article__row--headline'>
                        <Col sm='5' className='article__row__content'>
                            <div className='article__desc article__desc--first'>
                                <h4>Our history begin here</h4>
                                <p>
                                    123 Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshine Cove,
                                    Tropical Paradise
                                </p>
                                <p>
                                    <b>Info:</b>
                                    Necessário acompanhamento.
                                </p>
                            </div>
                        </Col>
                        <Col sm='7' className='article__row__content'>
                            <div className='tour-gallery tour-gallery--first'>
                                <a href={imgCard2}>
                                    <img src={imgCard2} alt='' />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className='article__container article__container--light'>
                    <Row className='article__row article__row--headline'>
                        <Col sm='5' className='article__row__content'>
                            <div className='tour-gallery tour-gallery--first'>
                                <a href={imgCard2}>
                                    <img src={imgCard2} alt='' />
                                </a>
                            </div>
                        </Col>
                        <Col sm='7' className='article__row__content'>
                            <div className='article__desc article__desc--first'>
                                <h4>Our history begin here</h4>
                                <p>
                                    123 Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshine Cove,
                                    Tropical Paradise
                                </p>
                                <p>
                                    <b>Info:</b>
                                    Necessário acompanhamento.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className='article__container'>
                    <Row className='article__row article__row--headline'>
                        <Col sm='5' className='article__row__content'>
                            <div className='article__desc article__desc--first'>
                                <h4>Our history begin here</h4>
                                <p>
                                    123 Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshin 123
                                    Oceanfront Avenue, Sunshine Cove,
                                    Tropical Paradise
                                </p>
                                <p>
                                    <b>Info:</b>
                                    Necessário acompanhamento.
                                </p>
                            </div>
                        </Col>
                        <Col sm='7' className='article__row__content'>
                            <div className='tour-gallery tour-gallery--first'>
                                <a href={imgCard2}>
                                    <img src={imgCard2} alt='' />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className='article__container'>
                    <Col md='3' className='article__row__content'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                    <Col md='3' className='article__row__content'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                    <Col md='3' className='article__row__content'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                    <Col md='3' className='article__row__content'>
                        <a href={imgCard1} className='article__photos'>
                            <img src={imgCard1} alt='' />
                        </a>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Article
