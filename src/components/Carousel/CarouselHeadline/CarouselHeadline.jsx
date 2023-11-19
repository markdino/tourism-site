/** @format */

import React, { Component } from 'react'
import './CarouselHeadline.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap'
import resort from '../../../assets/images/bg.png'

const items = [
    {
        id: 1,
        src: resort,
        altText: '',
        caption: '',
    },
    {
        id: 2,
        src: resort,
        altText: '',
        caption: '',
    },
    {
        id: 3,
        src: resort,
        altText: '',
        caption: '',
    },
]

class CarouselHeadline extends Component {
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

    startCarousel() {
        this.carouselInterval = setInterval(() => {
            this.next()
        }, 5000)
    }

    componentDidMount() {
        this.startCarousel()
    }

    stopCarousel() {
        clearInterval(this.carouselInterval)
    }

    componentWillUnmount() {
        this.stopCarousel()
    }

    render() {
        const { activeIndex } = this.state

        const slides = items.map((item, index) => (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
                className={`carouselHeadline__item ${
                    index === activeIndex
                        ? 'carouselHeadline__item--active'
                        : ''
                }`}
            >
                <div className='carouselHeadline__overlay'></div>
                <img
                    src={item.src}
                    alt={item.altText}
                    className='carouselHeadline__image'
                />
                <CarouselCaption
                    captionText={item.altText}
                    captionHeader={item.caption}
                    className='carouselHeadline__caption'
                />
            </CarouselItem>
        ))

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className='carouselHeadline__carousel'
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                    className='carouselHeadline__indicators'
                />
                {slides}
                {/* <CarouselControl
                    direction='prev'
                    directionText='Previous'
                    onClickHandler={this.previous}
                    className='carouselHeadline__control carouselHeadline__control--prev'
                /> */}
                {/* <CarouselControl
                    direction='next'
                    directionText='Next'
                    onClickHandler={this.next}
                    className='carouselHeadline__control carouselHeadline__control--next'
                /> */}
            </Carousel>
        )
    }
}

export default CarouselHeadline
