/** @format */

import React from 'react'
import { Button } from 'reactstrap'
import './Headline.scss'

const Headline = () => {
    return (
        <section className='headline'>
            <div className='headline__container'>
                <main className='cover-page' id='hero'>
                    <section className='wrapped-page'>
                        <div className='item-center'>
                            <h1>Manila Tourism</h1>
                            <h3>Tours | Travel | Guide</h3>
                            <Button outline color='warning' href='#about'>
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
