/** @format */

import React from 'react'
import { Col } from 'reactstrap'
import './CardAbout.css'

const TourCard = ({ classname, icon, text }) => {
    return (
        <Col className={classname} lg='3' md='6' sm='6'>
            <div className='svg-card'>
                {icon}
                <p>{text}</p>
            </div>
        </Col>
    )
}
export default TourCard
