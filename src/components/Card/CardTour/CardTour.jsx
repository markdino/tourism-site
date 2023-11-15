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
    console.log(')000000', tourcard)
    const { img, alt, title, subtitle } = tourcard
    return (
        <Card className='cardTour'>
            <CardImg top width='100%' src={img} alt={alt} />
            <CardBody>
                <Button
                    outline
                    color='secondary'
                    className='float-right'
                    href='tour'
                >
                    Read more
                </Button>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
            </CardBody>
        </Card>
    )
}
export default CardTour
