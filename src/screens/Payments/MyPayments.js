import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'

import {connect} from 'react-redux'

import {getPayments, filterPaymentsByDate} from '../../api/payment'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import DatePicker from '../../components/DatePicker'
import PaymentCard from './PaymentCard'
import AlertSnackBar from '../../components/AlertSnackBar'

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
        paymentsData: [],
        openAlert: false,
        alertMessage: "",
        alertAction: '',
        total: 0,
        current: 0,
    }

    componentDidMount() {
        this.getPaymentsApi(0)
    }

    getPaymentsApi = async(page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getPayments(page, token)
            this.setState({ loading: false, paymentsData: data.paymentList, total: data.total, current: data.current })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    filterPaymentsByDateApi = async(start, end, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await filterPaymentsByDate(start, end, page, token)
            this.setState({ loading: false, paymentsData: data.paymentList, total: data.total, current: data.current })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleDateOnChange = (event) => {
        if (event.type === "set") {
            const date = value.nativeEvent.timestamp
            const {startDate, endDate, dateTag} = this.state
            if (dateTag === "Start") {
                this.setState({ startDate: date, openDatePicker: false, dateTag: "" })

                const today = new Date()
                if (endDate && endDate !== today) {
                    this.filterPaymentsByDateApi(date, endDate, 0)
                }
            }
            else {
                this.setState({ endDate: date, openDatePicker: false, dateTag: "" })

                const today = new Date()
                if (startDate && startDate !== today) {
                    this.filterPaymentsByDateApi(startDate, date, 0)
                }
            }
        }
        else if (event.type === "dismissed") {
            this.setState({ openDatePicker: false, dateTag: "" })
        }
    }

    handleDateOnClick = (tag) => {
        this.setState({ dateTag: tag, openDatePicker: true })
    }

    handleDateClearOnPress = () => {
        this.setState({ startDate: new Date(), endDate: new Date(), openDatePicker: false })
    }

    renderDate = (text) => {
        return (
            <TouchableOpacity style = {styles.date} onPress = {() => this.handleDateOnClick(text)}>
                <Text style = {styles.dateText}>{text}</Text>
                <Image style = {styles.calendarImg} source = {calendar}/>
            </TouchableOpacity>
        )
    }

    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
    }

    renderSelectedDate = (startDate, endDate) => {
        return (
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
        const {paymentsData} = this.state
        return (
            <View style = {styles.listBlock}>
                <Text style = {styles.headerTitle}>Checkout your payment history</Text>
                <View style = {styles.list}>
                    { paymentsData.map((item, idx) => <PaymentCard paymentItem = {item} key = {idx}/>) }
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
                { startDate && endDate && this.renderSelectedDate(startDate, endDate) }
            </View>
        )
    }

    render() {
        const {loading, openDatePicker, dateTag, startDate, endDate, openAlert, alertMessage, alertAction} = this.state
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
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps)(MyPayments)
