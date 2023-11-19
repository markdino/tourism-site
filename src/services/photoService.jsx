/** @format */

import { request } from '../utils/api'

const getPhotos = async (url) => {
    try {
        const photos = await request('GET', url)
        console.log('Fotos obtidas com sucesso:', photos)
        return photos.photos
    } catch (error) {
        console.error('Erro ao buscar fotos da API:', error)
        throw error
    }
}

export { getPhotos }
