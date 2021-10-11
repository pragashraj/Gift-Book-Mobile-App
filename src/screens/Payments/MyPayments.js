import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, RefreshControl } from 'react-native'

import {connect} from 'react-redux'
import moment from 'moment'

import {getPayments, filterPaymentsByDate} from '../../api/payment'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import DatePicker from '../../components/DatePicker'
import PaymentCard from './PaymentCard'
import AlertSnackBar from '../../components/AlertSnackBar'
import Pagination from '../../components/Pagination'

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
        refreshing: false,
        todayDate: null
    }

    componentDidMount() {
        this.getPaymentsApi(0)
        const now = new Date()
        this.setState({ todayDate: now, startDate: now })
    }

    getPaymentsApi = async(page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getPayments(page, token)
            this.setState({ loading: false, paymentsData: data.paymentList, total: data.total, current: data.current + 1, refreshing: false })
        } catch (e) {
            this.setState({ loading: false, refreshing: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    filterPaymentsByDateApi = async(start, end, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await filterPaymentsByDate(start, end, page, token)
            this.setState({ loading: false, paymentsData: data.paymentList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleDateOnChange = (event) => {
        if (event.type === "set") {
            const date = value.nativeEvent.timestamp
            const {startDate, endDate, dateTag, todayDate} = this.state
            if (dateTag === "Start") {
                this.setState({ startDate: date, openDatePicker: false, dateTag: "" })

                if (endDate && endDate !== todayDate) {
                    this.filterPaymentsByDateApi(this.getDate(date)+"T00:00:00", this.getDate(endDate)+"T23:59:59", 0)
                }
            }
            else {
                this.setState({ endDate: date, openDatePicker: false, dateTag: "" })

                if (startDate && startDate !== todayDate) {
                    this.filterPaymentsByDateApi(this.getDate(startDate)+"T00:00:00", this.getDate(date)+"T23:59:59", 0)
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
        const now = new Date()
        this.setState({ startDate: now, endDate: now, todayDate: now, openDatePicker: false, dateTag: "" })
        this.getPaymentsApi(0)
    }

    handlePagination = (no) => {
        const now = new Date()
        this.setState({ current: no, startDate: now, endDate: now, todayDate: now, openDatePicker: false, dateTag: "" })
        this.getPaymentsApi(no - 1)
    }
    
    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
    }

    getDate = (date) => {
        return moment(date).toISOString().split(".")[0].split("T")[0]
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getPaymentsApi(0)
    }

    renderNodataAvailable = () => {
        return (
            <View style = {styles.noDataAvailableRoot}>
                <Text style = {styles.noDataAvailable}>Currently no data available</Text>
            </View>
        )
    }

    renderPagination = (total, current) => {
        return (
            <View style = {styles.paginationRoot}>
                <Pagination total = {total} current = {current} handlePaginationNumberOnPress = {this.handlePagination}/>
            </View>
        )
    }

    renderDate = (text) => {
        return (
            <TouchableOpacity style = {styles.date} onPress = {() => this.handleDateOnClick(text)}>
                <Text style = {styles.dateText}>{text}</Text>
                <Image style = {styles.calendarImg} source = {calendar}/>
            </TouchableOpacity>
        )
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
                    {
                        paymentsData.length > 0 ? 
                        paymentsData.map((item, idx) => <PaymentCard paymentItem = {item} key = {idx}/>)
                        :
                        this.renderNodataAvailable()
                    }
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
        const {
            loading, openDatePicker, dateTag, startDate, endDate, openAlert, alertMessage, alertAction, total, current, refreshing
        } = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Payments" navigation = {this.props.navigation}/>
                <ScrollView 
                    style = {styles.scrollView} 
                    indicatorStyle = "white"
                    refreshControl = {
                        <RefreshControl refreshing = {refreshing} onRefresh = {this.onRefresh}/>
                    }
                >
                    <View style = {styles.mainRoot}>
                        { this.renderDateFilter() }
                        { this.renderPaymentList() }
                        { total > 0 && this.renderPagination(total, current) }
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
