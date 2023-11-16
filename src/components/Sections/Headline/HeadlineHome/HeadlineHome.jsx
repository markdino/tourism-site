/** @format */

import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './HeadlineHome.css'
import CarouselHeadline from '../../../Carousel/CarouselHeadline/CarouselHeadline'

class HeadlineHome extends Component {
    render() {
        return (
            <section className='headlineHome'>
                <div className='headlineHome__container'>
                    <CarouselHeadline />

                    <section className='headlineHome__wrapper'>
                        <div className='headlineHome__text'>
                            <h1 className='headlineHome__title'>
                                Manila Tourism
                            </h1>
                            <h3 className='headlineHome__subtitle'>
                                Tours | Travel | Guide
                            </h3>
                            <Button
                                outline
                                color='warning'
                                href='#about'
                                className='headlineHome__button'
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

export default HeadlineHome
