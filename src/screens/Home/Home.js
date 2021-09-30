import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native'

import TopBar from '../../components/TopBar'

import wallpaper from '../../assets/wallpapers/Backgroud.jpg'

import {styles} from './styles'

class Home extends Component {

    renderBackground = () => (
        <Image style = {styles.wallpaper} source = {wallpaper}/>
    )

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar/>
                <View style = {styles.imageRoot}>
                    { this.renderBackground() }
                </View>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home