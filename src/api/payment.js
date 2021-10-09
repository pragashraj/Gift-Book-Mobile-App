import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `payment/${endpoint}`
}

export const getPayments = (page, token) => {
    const endpoint =  getEndpointWithPrefix(`getPayments/${page}`)
    return GET(endpoint, token)
}

export const create = (data, token) => {
    const endpoint =  getEndpointWithPrefix('create')
    return POST(endpoint, data, token)
}

export const filterPaymentsByDate = (start, end, page, token) => {
    const endpoint =  getEndpointWithPrefix(`filterPaymentsByDate?start=${start}&end=${end}&page=${page}`)
    return GET(endpoint, token)
}