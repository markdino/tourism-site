/** @format */

import React, { Component} from 'react'
import { Button } from 'reactstrap'
import './Headline.css'

import resort from '../../../assets/images/bg.png'

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

class Headline extends Component {
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
                <div className="locationsCarousel__overlay"></div>
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
            <section className='headline'>
                <div className='headline__container'>


                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        className='headline__carousel'
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={this.goToIndex}
                            className='locationsCarousel__indicators'
                        />
                        {slides}
                        {/* <CarouselControl
                            direction='prev'
                            directionText='Previous'
                            onClickHandler={this.previous}
                            className='locationsCarousel__control locationsCarousel__control--prev'
                        /> */}
                        {/* <CarouselControl
                            direction='next'
                            directionText='Next'
                            onClickHandler={this.next}
                            className='locationsCarousel__control locationsCarousel__control--next'
                        /> */}
                    </Carousel>
                    <section className='wrapped-page'>
                        <div className='headline__text'>
                            <h1 className='headline__title'>Manila Tourism</h1>
                            <h3 className='headline__subtitle'>
                                Tours | Travel | Guide
                            </h3>
                            <Button
                                outline
                                color='warning'
                                href='#about'
                                className='headline__button'
                            >
                                Explore More
                            </Button>
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}

export default Headline
