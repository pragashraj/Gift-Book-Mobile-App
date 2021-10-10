import React from 'react'

import {Provider} from 'react-redux'
import store from './src/redux/store'

import Index from './src/screens/Index'

const App = () => {
    return  <Index/>
}

export default () => {
    return(
        <Provider store = {store}>
            <App/>
        </Provider>
    )
}