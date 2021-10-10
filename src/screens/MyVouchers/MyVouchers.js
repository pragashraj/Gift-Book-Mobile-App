import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'

import {connect} from 'react-redux'

import {getVouchers, filterVouchersByDate, filterVouchersByStatus} from '../../api/voucher'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import RadioButton from '../../components/RadioButton'
import Voucher from '../../components/Voucher'
import DatePicker from '../../components/DatePicker'
import VoucherPopup from '../../components/VoucherPopup'
import AlertSnackBar from '../../components/AlertSnackBar'
import Pagination from '../../components/Pagination'

import {styles} from './styles'
import calendar from '../../assets/images/icons/calendar.png'
import close from '../../assets/images/icons/close.png'

class MyVouchers extends Component {
    state = {
        loading: false,
        radioValue: "all",
        dateTag: "",
        openDatePicker: false,
        startDate: new Date(),
        endDate: new Date(),
        openVoucherPopup: false,
        selectedVoucher: null,
        openAlert: false,
        alertMessage: "",
        alertAction: '',
        vouchersData: [],
        total: 0,
        current: 0,
    }

    componentDidMount() {
        this.getVouchersApi(0)
    }

    getVouchersApi = async(page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getVouchers(page, token)
            this.setState({ loading: false, vouchersData: data.voucherList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    filterVouchersByDateApi = async(start, end, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await filterVouchersByDate(start, end, page, token)
            this.setState({ loading: false, vouchersData: data.voucherList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    filterVouchersByStatusApi = async(status, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await filterVouchersByStatus(status, page, token)
            this.setState({ loading: false, vouchersData: data.voucherList, total: data.total, current: data.current + 1 })
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
                    this.filterVouchersByDateApi(date, endDate, 0)
                }
            }
            else {
                this.setState({ endDate: date, openDatePicker: false, dateTag: "" })

                const today = new Date()
                if (startDate && startDate !== today) {
                    this.filterVouchersByDateApi(startDate, date, 0)
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

    handleVoucherOnPress = (item) => {
        this.setState({ selectedVoucher: item, openVoucherPopup: true})
    }

    handleRadioOnPress = (value) => {
        this.setState({ radioValue: value })
    }

    handleDateClearOnPress = () => {
        this.setState({ startDate: new Date(), endDate: new Date() })
    }

    handleVoucherPopupClose = () => {
        this.setState({ selectedVoucher: null, openVoucherPopup: false})
    }

    handleVoucherShare = () => {
        this.handleVoucherPopupClose()
    }

    handlePagination = (no) => {
        this.setState({ current: no})
        this.getVouchersApi(no - 1)
    }

    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
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

    renderVoucherPopup = (openVoucherPopup, selectedVoucher) => {
        return (
            <VoucherPopup
                open = {openVoucherPopup}
                onClose = {this.handleVoucherPopupClose}
                selectedItem = {selectedVoucher}
                handleCancel = {this.handleVoucherPopupClose}
                handleShare = {this.handleVoucherShare}
            />
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

    renderVoucher = (item, idx) => {
        return (
            <View style = {styles.listItem} key = {idx}>
                <TouchableOpacity onPress = {() => this.handleVoucherOnPress(item)}>
                    <Voucher voucherItem = {item}/>
                </TouchableOpacity>
            </View>
        )
    }

    renderRadioButton = (text, name) => {
        const {radioValue} = this.state
        return (
            <RadioButton 
                text = {text} 
                name = {name} 
                value = {radioValue} 
                onPress = {this.handleRadioOnPress}
            />
        )
    }

    renderVouchers = () => {
        const {vouchersData} = this.state
        return (
            <View style = {styles.listBlock}>
                <Text style = {styles.headerTitle}>Checkout your vouchers & gifts</Text>
                <View style = {styles.list}>
                    { 
                        vouchersData.length > 0 ?
                        vouchersData.map((item, idx) => this.renderVoucher(item, idx))
                        :
                        this.renderNodataAvailable() 
                    }
                </View>
            </View>
        )
    }

    renderStatusFilter = () => {
        return (
            <View style = {styles.filterBlock}>
                <Text style = {styles.headerTitle}>Filter by status</Text>
                <View style = {styles.filterItemRoot}>
                    <View style = {styles.row}>
                        { this.renderRadioButton("ALL", "all") }
                        { this.renderRadioButton("Active", "active") }
                        { this.renderRadioButton("Expired", "expired") }
                    </View>
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
            loading, openDatePicker, dateTag, startDate, endDate, 
            openVoucherPopup, selectedVoucher, openAlert, alertMessage, alertAction,
            total, current
        } = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Vouchers" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    <View style = {styles.mainRoot}>
                        { this.renderDateFilter() }
                        { this.renderStatusFilter() }
                        { this.renderVouchers() }
                        { total > 0 && this.renderPagination(total, current) }
                    </View>
                </ScrollView>
                { loading && <Loading open = {loading}/> }
                { openDatePicker && <DatePicker date = { dateTag === "Start" ? startDate : endDate} onChange = {this.handleDateOnChange}/>}
                { openVoucherPopup && selectedVoucher && this.renderVoucherPopup(openVoucherPopup, selectedVoucher) }
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps)(MyVouchers)