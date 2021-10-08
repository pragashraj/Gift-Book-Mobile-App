import axios from 'axios'

export const POST = (endpoint, requestBody = {}, authorization = null) => {
    const instance = createInstance(authorization, 'application/json')

    instance.post(endpoint, requestBody).then(response => {
        return response
    })
    .catch(error => {
        console.log(error) 
    })
}

export const GET = (endpoint, authorization = null) => {
    const instance = createInstance(authorization, 'application/json')

    instance.get(endpoint).then(response => {
        return response
    })
    .catch(error => {
        console.log(error) 
    })
}


const createInstance = (authorization, contentType) => {
    const instance = axios.create({
        baseURL: "http://localhost:9000/api/"
    })
      
    if (authorization) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${authorization}`
    }

    instance.defaults.headers.post['Content-Type'] = contentType

    return instance
}
