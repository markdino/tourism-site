/** @format */

import React, { Component } from 'react'
import beach from '../../../../../assets/images/beach.jpg'
import resort from '../../../../../assets/images/resort.jpg'
import camp from '../../../../../assets/images/camp.jpg'
import mountain from '../../../../../assets/images/mountain.jpg'
import gulp from '../../../../../assets/images/gulp.jpg'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap'

import './LocationsCarousel.css'

const items = [
    {
        src: resort,
        altText: 'Slide 1',
        caption: 'Resorts',
    },
    {
        src: gulp,
        altText: 'Slide 2',
        caption: 'Rock Climbing',
    },
    {
        src: camp,
        altText: 'Slide 3',
        caption: 'Camping',
    },
    {
        src: beach,
        altText: 'Slide 4',
        caption: 'Beach',
    },
    {
        src: mountain,
        altText: 'Slide 5',
        caption: 'Mountain Climbing',
    },
]

class LocationsCarousel extends Component {
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
        )
    }
}

export default LocationsCarousel
