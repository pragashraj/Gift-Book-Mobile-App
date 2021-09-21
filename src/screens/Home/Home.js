import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'

import {styles} from './styles'

class Home extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    <Text> Home </Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home