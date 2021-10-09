import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer'

import routes from './src/routes/routes'
import CustomDrawer from './src/components/CustomDrawer'

const stack = createStackNavigator()
const drawer = createDrawerNavigator()

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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawer props = {props}/>
    </DrawerContentScrollView>
  )
}

function DrawerFlow() {
  return (
    <drawer.Navigator drawerContent = {(props) => <CustomDrawerContent {...props} />}>
      { routes.main.map(route => {
          const {name, component, options} = route
          return (
            <drawer.Screen
              name = {name}
              component = {component}
              options = {options}
              key = {name}
            />
          )
      }) }
    </drawer.Navigator>
  )
}

const App = () => {
  const auth = false

  const createStackScreen = (name, component) => (
    <stack.Screen
      name = {name}
      component = {component}
      options = { { headerShown: false } }
    />
  )

  const renderUnAuthenticatedFlow = () => (
    <stack.Navigator>
      { createStackScreen("Authentication", AuthFlow) }
    </stack.Navigator>
  )

  return (
    <NavigationContainer>
      { auth ? <DrawerFlow/> : renderUnAuthenticatedFlow() }
    </NavigationContainer>
  )
}

export default App