/** @format */

import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import imgCard1 from '../../../assets/images/img-card (1).jpg'
import imgCard2 from '../../../assets/images/img-card (2).jpg'

import './Article.css'
import Reviews from '../Reviews/'

class Article extends Component {
    render() {
        return (
            <section className='tour-info article'>
                <Row className='article__section article__section--bg-primary'>
                    <Row className='article__row'>
                        <Col sm='5' className='article__row__content article__row__col--desc'>
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
                <Row className='article__section article__section--bg-secundary'>
                    <Row className='article__row'>
                        <Col sm='6' className='article__row__col'>
                            <div className='tour-gallery tour-gallery--first'>
                                <a href={imgCard2}>
                                    <img src={imgCard2} alt='' />
                                </a>
                            </div>
                        </Col>
                        <Col sm='6' className='article__row__col article__row__col--desc'>
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
                        </Col>
                    </Row>
                </Row>
                <Row className='article__section article__section--bg-terciary'>
                    <Row className='article__row'>
                        <Col sm='5' className='article__row__col article__row__col--desc'>
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
                        </Col>
                        <Col sm='7' className='article__row__col'>
                            <div className='tour-gallery'>
                                <a href={imgCard2}>
                                    <img src={imgCard2} alt='' />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className='article__section article__section--bg-fouth'>
                    <Col md='3' className='article__row__col'>
                        <img src={imgCard1} alt='' className='article__photo' />
                    </Col>
                    <Col md='3' className='article__row__col'>
                        <img src={imgCard1} alt='' className='article__photo' />
                    </Col>
                    <Col md='3' className='article__row__col'>
                        <img src={imgCard1} alt='' className='article__photo' />
                    </Col>
                    <Col md='3' className='article__row__col'>
                        <img src={imgCard1} alt='' className='article__photo' />
                    </Col>
                </Row>
                <Reviews />
            </section>
        );
    }
}

export default Article
