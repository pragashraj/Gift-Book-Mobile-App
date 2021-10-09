import {GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `voucher/${endpoint}`
}

export const getVouchers = (page, token) => {
    const endpoint =  getEndpointWithPrefix(`getVouchers/${page}`)
    return GET(endpoint, token)
}

export const filterVouchersByDate = (start, end, page, token) => {
    const endpoint =  getEndpointWithPrefix(`filterVouchersByDate?start=${start}&end=${end}&page=${page}`)
    return GET(endpoint, token)
}

export const filterVouchersByStatus = (status, page, token) => {
    const endpoint =  getEndpointWithPrefix(`filterVouchersByStatus?status=${status}&page=${page}`)
    return GET(endpoint, token)
}