import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'

import {styles} from './styles'

class MyPayments extends Component {
    state = {
        loading: false
    }

    render() {
        const {loading} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Payments" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    <View style = {styles.mainRoot}>

                    </View>
                </ScrollView>
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}

export default MyPayments
