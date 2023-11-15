/** @format */

import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import '../App.css'
// import tours from "../components/Package";
import imgCard1 from '../assets/images/img-card (1).jpg'
import imgCard2 from '../assets/images/img-card (2).jpg'
import imgCard3 from '../assets/images/img-card (3).jpg'
import imgCard4 from '../assets/images/img-card (4).jpg'

import resort from '../assets/images/resort.jpg'


import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap'

const items = [
    {
        src: resort,
        altText: '',
        caption: '',
    },
    {
        src: resort,
        altText: '',
        caption: '',
    },
    {
        src: resort,
        altText: '',
        caption: '',
    },
    {
        src: resort,
        altText: '',
        caption: '',
    },
    {
        src: resort,
        altText: '',
        caption: '',
    },
]

class Tour extends Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
    }

    onExiting() {
        this.animating = true
    }

    onExited() {
        this.animating = false
    }

    next() {
        if (this.animating) return
        const nextIndex =
            this.state.activeIndex === items.length - 1
                ? 0
                : this.state.activeIndex + 1
        this.setState({ activeIndex: nextIndex })
    }

    previous() {
        if (this.animating) return
        const nextIndex =
            this.state.activeIndex === 0
                ? items.length - 1
                : this.state.activeIndex - 1
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex(newIndex) {
        if (this.animating) return
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        const slides = items.map((item, index) => (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
                className={`locationsCarousel__item ${
                    index === activeIndex
                        ? 'locationsCarousel__item--active'
                        : ''
                }`}
            >
                <img
                    src={item.src}
                    alt={item.altText}
                    className='locationsCarousel__image'
                />
                <CarouselCaption
                    captionText={item.altText}
                    captionHeader={item.caption}
                    className='locationsCarousel__caption'
                />
            </CarouselItem>
        ))

        return (

            <div className='subComponent'>
                <section className='article__headline tour-cover item-center'>
                    
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        className='locationsCarousel'
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={this.goToIndex}
                            className='locationsCarousel__indicators'
                        />
                        {slides}
                        <CarouselControl
                            direction='prev'
                            directionText='Previous'
                            onClickHandler={this.previous}
                            className='locationsCarousel__control locationsCarousel__control--prev'
                        />
                        <CarouselControl
                            direction='next'
                            directionText='Next'
                            onClickHandler={this.next}
                            className='locationsCarousel__control locationsCarousel__control--next'
                        />
                    </Carousel>
                    <div className='article__name'>
                        <h1 className='article__title'>Seaside Resort</h1>
                        <h4 className='article__subtitle'>Batangas Resort</h4>
                    </div>
                </section>
                <section className='tour-info article__content'>
                    <Row className="article__container article__container--dark">
                        <Row className="article__row article__row--headline">
                            <Col sm='5' className="article__row__content">
                                <div className='article__desc article__desc--first'>
                                    <h4>
                                        Our history begin here
                                    </h4>
                                    <p>
                                            123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshine Cove, Tropical Paradise
                                    </p>
                                    <p>
                                            <b>
                                                Info:   
                                            </b>
                                            Necessário acompanhamento.
                                    </p>
                                </div>
                            </Col>
                            <Col sm='7'  className="article__row__content">
                                <div className='tour-gallery tour-gallery--first'>
                                    <a href={imgCard2}>
                                        <img src={imgCard2} alt='' />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="article__container article__container--light">
                        <Row className="article__row article__row--headline">
                            <Col sm='5' className="article__row__content">
                                <div className='article__desc article__desc--first'>
                                    <h4>
                                        Our history begin here
                                    </h4>
                                    <p>
                                            123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshine Cove, Tropical Paradise
                                    </p>
                                    <p>
                                            <b>
                                                Info:   
                                            </b>
                                            Necessário acompanhamento.
                                    </p>
                                </div>
                            </Col>
                            <Col sm='7'  className="article__row__content">
                                <div className='tour-gallery tour-gallery--first'>
                                    <a href={imgCard2}>
                                        <img src={imgCard2} alt='' />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="article__container">
                        <Row className="article__row article__row--headline">
                            <Col sm='5' className="article__row__content">
                                <div className='article__desc article__desc--first'>
                                    <h4>
                                        Our history begin here
                                    </h4>
                                    <p>
                                            123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshin 123 Oceanfront Avenue, Sunshine Cove, Tropical Paradise
                                    </p>
                                    <p>
                                            <b>
                                                Info:   
                                            </b>
                                            Necessário acompanhamento.
                                    </p>
                                </div>
                            </Col>
                            <Col sm='7'  className="article__row__content">
                                <div className='tour-gallery tour-gallery--first'>
                                    <a href={imgCard2}>
                                        <img src={imgCard2} alt='' />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="article__container">
                        <Col md='3' className="article__row__content">
                            <a href={imgCard1} className='article__photos'>
                                <img src={imgCard1} alt='' />
                            </a>
                        </Col>
                        <Col md='3' className="article__row__content">
                            <a href={imgCard1} className='article__photos'>
                                <img src={imgCard1} alt='' />
                            </a>
                        </Col>
                        <Col md='3' className="article__row__content">
                            <a href={imgCard1} className='article__photos'>
                                <img src={imgCard1} alt='' />
                            </a>
                        </Col>
                        <Col md='3' className="article__row__content">
                            <a href={imgCard1} className='article__photos'>
                                <img src={imgCard1} alt='' />
                            </a>
                        </Col>
                    </Row>
                </section>
                <Container>
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

    }
}

export default Tour
