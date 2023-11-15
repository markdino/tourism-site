/** @format */

import React from 'react'
import { Button } from 'reactstrap'
import './Headline.css'

const Headline = () => {
    return (
        <section className='headline'>
            <div className='headline__container'>
                <main className='cover-page' id='hero'>
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
                </main>
            </div>
        </section>
    )
}

export default Headline
