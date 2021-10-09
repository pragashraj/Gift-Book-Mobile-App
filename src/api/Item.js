import {GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `item/${endpoint}`
}

export const getItemsByMerchant = (merchant, page, token) => {
    const endpoint =  getEndpointWithPrefix(`getItemsByMerchant?merchant=${merchant}&page=${page}`)
    return GET(endpoint, token)
}

export const getItemByName = (name, merchant, page, token) => {
    const endpoint =  getEndpointWithPrefix(`getItemByName?name=${name}&merchant=${merchant}&page=${page}`)
    return GET(endpoint, token)
}