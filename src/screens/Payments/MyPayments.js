import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import DatePicker from '../../components/DatePicker'

import {styles} from './styles'
import calendar from '../../assets/images/icons/calendar.png'
import close from '../../assets/images/icons/close.png'

class MyPayments extends Component {
    state = {
        loading: false,
        startDate: new Date(),
        endDate: new Date(),
        dateTag: "",
        openDatePicker: false,
    }

    handleDateOnChange = (value) => {
        const date = value.nativeEvent.timestamp
        if (this.state.dateTag === "Start") {
            this.setState({ startDate: date, openDatePicker: false, dateTag: "" })
        }
        else {
            this.setState({ endDate: date, openDatePicker: false, dateTag: "" })
        }
    }

    handleDateOnClick = (tag) => {
        this.setState({ dateTag: tag, openDatePicker: true })
    }

    handleDateClearOnPress = () => {
        this.setState({ startDate: new Date(), endDate: new Date() })
    }

    renderDate = (text) => {
        return (
            <TouchableOpacity style = {styles.date} onPress = {() => this.handleDateOnClick(text)}>
                <Text style = {styles.dateText}>{text}</Text>
                <Image style = {styles.calendarImg} source = {calendar}/>
            </TouchableOpacity>
        )
    }

    renderDatePicker = (dateTag, startDate, endDate) => {
        return (
            <DatePicker 
                date = { dateTag === "Start" ? startDate : endDate} 
                onChange = {this.handleDateOnChange}
            />
        )
    }

    renderPaymentList = () => {
        return (
            <View style = {styles.listBlock}>
                <Text style = {styles.headerTitle}>Checkout your payment history</Text>
                <View style = {styles.list}>
                    
                </View>
            </View>
        )
    }

    renderDateFilter = () => {
        const {startDate, endDate} = this.state
        return (
            <View style = {styles.filterBlock}>
                <Text style = {styles.headerTitle}>Filter by date</Text>
                <View style = {styles.filterItemRoot}>
                    <View style = {styles.row}>
                        { this.renderDate("Start") }
                        { this.renderDate("End") }
                    </View>
                </View>
                { startDate && endDate &&
                    <View style = {styles.selectedDateRoot}>
                        <View style = {styles.selectedDate}>
                            <View style = {styles.row}>
                                <Text>{startDate.toDateString()}</Text>
                                <Text>{endDate.toDateString()}</Text>
                            </View>
                        </View>
                        <View style = {styles.clearBtnRoot}>
                            <TouchableOpacity onPress = {this.handleDateClearOnPress}>
                                <Image style = {styles.icon} source = {close}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        )
    }

    render() {
        const {loading, openDatePicker, dateTag, startDate, endDate} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Payments" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    <View style = {styles.mainRoot}>
                        { this.renderDateFilter() }
                        { this.renderPaymentList() }
                    </View>
                </ScrollView>
                { loading && <Loading open = {loading}/> }
                { openDatePicker && this.renderDatePicker(dateTag, startDate, endDate) }
            </SafeAreaView>
        )
    }
}

export default MyPayments
