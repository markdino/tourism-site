/** @format */

import React from 'react'
import { Col } from 'reactstrap'
import './CardAbout.css'

const TourCard = ({ icon, text }) => {
    return (
        <Col className='cardAbout' lg='3' md='6' sm='6'>
            <div className='cardAbout__content svg-card'>
                {icon}
                <p>{text}</p>
            </div>
        </Col>
    )
}
export default TourCard
