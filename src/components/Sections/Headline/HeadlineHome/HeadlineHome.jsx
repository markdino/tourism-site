/** @format */

import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './HeadlineHome.css'
import CarouselHeadline from '../../../Carousel/CarouselHeadline/CarouselHeadline'

class HeadlineHome extends Component {

    render() {
        return (
            <section className='headline'>
                <div className='headline__container'>

                    <CarouselHeadline />

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

export default HeadlineHome
