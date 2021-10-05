import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import RadioButton from '../../components/RadioButton'
import Voucher from '../../components/Voucher'
import DatePicker from '../../components/DatePicker'
import VoucherPopup from '../../components/VoucherPopup'

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
        selectedVoucher: null
    }

    vouchers = [
        {price: "400", merchant: "ISSO", item: "Burger", date: "04-10-2021", status: "Active"},
        {price: "150", merchant: "Allude", item: "Pants", date: "22-05-2021", status: "Expired"},
        {price: "1000", merchant: "S&S", item: "T-shirt", date: "15-08-2021", status: "Active"},
    ]

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
        return (
            <View style = {styles.listBlock}>
                <Text style = {styles.headerTitle}>Checkout your vouchers & gifts</Text>
                <View style = {styles.list}>
                    { this.vouchers.map((item, idx) => this.renderVoucher(item, idx)) }
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
        const {loading, openDatePicker, dateTag, startDate, endDate, openVoucherPopup, selectedVoucher} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Vouchers" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    <View style = {styles.mainRoot}>
                        { this.renderDateFilter() }
                        { this.renderStatusFilter() }
                        { this.renderVouchers() }
                    </View>
                </ScrollView>
                { loading && <Loading open = {loading}/> }
                { openDatePicker && <DatePicker date = { dateTag === "Start" ? startDate : endDate} onChange = {this.handleDateOnChange}/>}
                { openVoucherPopup && selectedVoucher && this.renderVoucherPopup(openVoucherPopup, selectedVoucher) }
            </SafeAreaView>
        )
    }
}

export default MyVouchers