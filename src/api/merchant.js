import {GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `merchant/${endpoint}`
}

export const getMerchants = (page, token) => {
    const endpoint =  getEndpointWithPrefix(`getMerchants/${page}`)
    return GET(endpoint, token)
}

export const getMerchantsByCategory = (category, page, token) => {
    const endpoint =  getEndpointWithPrefix(`getMerchantsByCategory?category=${category}&page=${page}`)
    return GET(endpoint, token)
}

export const getMerchantByName = (name, page, token) => {
    const endpoint =  getEndpointWithPrefix(`getMerchantByName?name=${name}&page=${page}`)
    return GET(endpoint, token)
}

export const getMerchantCategories = (token) => {
    const endpoint =  getEndpointWithPrefix('getMerchantCategories')
    return GET(endpoint, token)
}