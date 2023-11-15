/** @format */

import React, { Component } from 'react'
import './HeadlineTour.css'
import CarouselTour from '../../../Carousel/CarouselTour'

class HeadlineTour extends Component {
    render() {
        return (
            <section className='article__headline tour-cover item-center'>
                <CarouselTour />
                <div className='article__name'>
                    <h1 className='article__title'>Seaside Resort</h1>
                    <h4 className='article__subtitle'>
                        Batangas Resort
                    </h4>
                </div>
            </section>
        )
    }
}

export default HeadlineTour
