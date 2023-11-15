/** @format */

import React from 'react'
import {
    Col
} from 'reactstrap'
import './CardService.css'

const CardService = ({ classname, icon, text }) => {
    return (
        <Col lg='3' md='6' sm='6'>
            <div className='services__card svg-card-2'>
                {icon}
                <p>{text}</p>
            </div>
        </Col>
    )
}
export default CardService
