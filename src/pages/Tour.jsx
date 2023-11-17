/** @format */

import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import '../App.css'
import Footer from '../components/Footer/Footer'
import HeadlineTour from '../components/Sections/Headline/HeadlineTour'
import Article from '../components/Sections/Article'

class Tour extends Component {
    render() {
        return (
            <>
                <div className=''>
                    <HeadlineTour />
                    <Article />
                </div>
                <Footer />
            </>
        )
    }
}

export default Tour
