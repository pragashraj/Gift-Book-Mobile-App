import React, { Component } from 'react'

import {connect} from 'react-redux'

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer'

import routes from '../routes/routes'
import CustomDrawer from '../components/CustomDrawer'

const stack = createStackNavigator()
const drawer = createDrawerNavigator()

const AuthFlow = () => {
    return(
        <stack.Navigator>
            { routes.auth.map(route => {
                const {name, component, options} = route
                return <stack.Screen name = {name} component = {component} options = {options} key = {name}/>
            }) }
        </stack.Navigator>
    )
}
  
function DrawerFlow() {
    return (
        <drawer.Navigator drawerContent = {(props) => <CustomDrawerContent {...props} />}>
            { routes.main.map(route => {
                const {name, component, options} = route
                return <drawer.Screen name = {name} component = {component} options = {options} key = {name}/>
            }) }
        </drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <CustomDrawer props = {props}/>
        </DrawerContentScrollView>
    )
}

class Index extends Component {

    createStackScreen = (name, component) => {
        return (
            <stack.Screen
                name = {name}
                component = {component}
                options = { { headerShown: false } }
            />
        )
    }
    
    renderUnAuthenticatedFlow = () => {
        return (
            <stack.Navigator>
                { this.createStackScreen("Authentication", AuthFlow) }
            </stack.Navigator>
        )
    }

    render() {
        return (
            <NavigationContainer>
                { this.props.user ? <DrawerFlow/> : this.renderUnAuthenticatedFlow() }
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Index)
