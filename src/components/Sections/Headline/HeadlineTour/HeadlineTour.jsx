/** @format */

import React, { Component } from 'react'
import './HeadlineTour.css'
import CarouselTour from '../../../Carousel/CarouselTour'

class HeadlineTour extends Component {
    render() {
        return (
            <section className='headlineTour tour-cover item-center'>
                <CarouselTour />
                <div className='headlineTour__name'>
                    <h1 className='headlineTour__title'>Seaside Resort</h1>
                    <h4 className='headlineTour__subtitle'>Batangas Resort</h4>
                </div>
            </section>
        )
    }
}

export default HeadlineTour
