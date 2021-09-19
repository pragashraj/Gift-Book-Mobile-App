import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import wallpaper from '../../assets/wallpapers/ForgotPassword.jpg'

import {styles} from './styles'

class ForgotPassword extends Component {

    renderBackground = () => (
        <Image style = {styles.wallpaper} source = {wallpaper}/>
    )

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.imageRoot}>
                    { this.renderBackground() }
                </View>
            </View>
        )
    }
}

export default ForgotPassword