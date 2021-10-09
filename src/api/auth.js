import {POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `auth/${endpoint}`
}

export const signUp = (data) => {
    const endpoint =  getEndpointWithPrefix('sign-up')
    return POST(endpoint, data)
}

export const signIn = (data) => {
    const endpoint =  getEndpointWithPrefix('sign-in')
    return POST(endpoint, data)
}

export const sendResetCode = (email) => {
    const endpoint =  getEndpointWithPrefix(`send-reset-code/${email}`)
    return POST(endpoint)
}

export const confirmResetCode = (email, code) => {
    const endpoint =  getEndpointWithPrefix(`confirm-reset-code?email=${email}&code=${code}`)
    return POST(endpoint)
}

export const changePassword = (email, password) => {
    const endpoint =  getEndpointWithPrefix(`confirm-reset-code?email=${email}&newPassword=${password}`)
    return POST(endpoint)
}