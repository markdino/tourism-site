/** @format */

import axios from 'axios'

const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.pexels.com/v1/'

const request = async (method, endpoint) => {
    try {
        const url = `${BASE_URL}${endpoint}`
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        }

        let response

        if (method === 'GET') {
            response = await axios.get(url, { headers })
        }
        return response.data
    } catch (error) {
        console.error(`Erro na solicitação ${method}:`, error)
        throw error
    }
}

export { request }
