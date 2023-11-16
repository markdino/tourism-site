/** @format */

import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap'
import './CardTour.css'

const CardTour = ({ tourcard }) => {
    const { img, alt, title, subtitle } = tourcard
    return (
        <Card className='cardTour'>
            <CardImg top width='100%' src={img} alt={alt} className='cardTour__image' />
            <CardBody className='cardTour__content'>
                <Button
                    outline
                    color='secondary'
                    className='cardTour__button'
                    href='tour'
                >
                    Read more
                </Button>
                <CardTitle className='cardTour__title'>{title}</CardTitle>
                <CardSubtitle className='cardTour__description'>{subtitle}</CardSubtitle>
            </CardBody>
        </Card>
    )
}
export default CardTour
