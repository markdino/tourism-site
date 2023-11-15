/** @format */

import React, { Component } from 'react'
import { getPhotos } from '../../../services/photoService'
import { Container, Row, Badge } from 'reactstrap'
import './Packages.css'
import CardTour from '../../Card/CardTour'

const itemCategories = [
    'all',
    'beach',
    'mountain',
    'resort',
    'climbing',
    'camping',
    'honeymoon',
]

class Packages extends Component {
    state = {
        cards: [],
        category: 'all',
    }

    async componentDidMount() {
        try {
            const response = await getPhotos('curated?per_page=10')

            if (response && response.length > 0) {
                const cards = response.map((photo) => ({
                    id: photo.id,
                    category: ['all'],
                    img: photo.src.large,
                    alt: photo.alt,
                    title: photo.photographer,
                    subtitle: 'Photo by ' + photo.photographer,
                }))

                this.setState({ cards })
                console.log('XISSS', cards)
            } else {
                console.error(
                    'Erro ao buscar fotos da API: Fotos não encontradas',
                )
            }
        } catch (error) {
            console.error('Erro ao buscar fotos da API:', error)
        }
    }

    render() {
        const { cards, category } = this.state

        return (
            <section className='packages'>
                <div className='packages__container'>
                    <div className='packages__subComponent-lg' id='packageBody'>
                        <Container>
                            <header className='packages__header'>
                                <h1 className='packages__title'>
                                    Tour Packages
                                </h1>
                                <p>A Great Collection of Our Tour Packages</p>
                            </header>
                            <section className='packages__body'>
                                <div className='packages__filter'>
                                    {itemCategories.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            href=''
                                            color={
                                                badge === category
                                                    ? 'dark'
                                                    : 'light'
                                            }
                                            onClick={() =>
                                                this.setState({
                                                    category: badge,
                                                })
                                            }
                                            className='packages__badge'
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>

                                <Row className='packages__destines'>
                                    {cards.map((card, index) => (
                                        <CardTour
                                            key={card.id}
                                            tourcard={card}
                                        />
                                    ))}
                                </Row>
                            </section>
                        </Container>
                    </div>
                </div>
            </section>
        )
    }
}

export default Packages
