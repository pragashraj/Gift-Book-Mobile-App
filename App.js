import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import routes from './src/routes/routes'

const stack = createStackNavigator()

const AuthFlow = () => {
  return(
    <stack.Navigator>
      { routes.auth.map(route => {
          const {name, component, options} = route
          return (
            <stack.Screen
              name = {name}
              component = {component}
              options = {options}
              key = {name}
            />
          )
      }) }
    </stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name = "Authentication"
          component = {AuthFlow}
          options = { { headerShown: false } }
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
