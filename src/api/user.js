import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `user/${endpoint}`
}

export const getProfileDetails = (email, token) => {
    const endpoint =  getEndpointWithPrefix(`profile-details/${email}`)
    return GET(endpoint, token)
}

export const updateProfileDetails = (data, token) => {
    const endpoint =  getEndpointWithPrefix('update-profile-details')
    return POST(endpoint, data, token)
}

export const updatePaymentCardDetails = (data, token) => {
    const endpoint =  getEndpointWithPrefix('update-payment-card-details')
    return POST(endpoint, data, token)
}

export const changePassword = (data, token) => {
    const endpoint =  getEndpointWithPrefix('change-password')
    return POST(endpoint, data, token)
}