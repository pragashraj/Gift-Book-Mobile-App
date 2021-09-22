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


const MainFlow = () => {
  return(
    <stack.Navigator>
      { routes.main.map(route => {
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
  const auth = true

  const createStackScreen = (name, component) => (
    <stack.Screen
      name = {name}
      component = {component}
      options = { { headerShown: false } }
    />
  )

  const renderAuthenticatedFlow = () => (
    <stack.Navigator>
        { createStackScreen("Main", MainFlow) }
    </stack.Navigator>
  )

  const renderUnAuthenticatedFlow = () => (
    <stack.Navigator>
      { createStackScreen("Authentication", AuthFlow) }
    </stack.Navigator>
  )

  return (
    <NavigationContainer>
      { auth ? renderAuthenticatedFlow() : renderUnAuthenticatedFlow() }
    </NavigationContainer>
  )
}

export default App
