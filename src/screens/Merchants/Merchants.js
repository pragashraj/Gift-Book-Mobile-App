import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

import {getMerchants, getMerchantsByCategory, getMerchantByName, getMerchantCategories} from '../../api/merchant'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import Merchant from '../../components/Item'
import Search from '../../components/Search'
import MerchantPopup from '../../components/MerchantPopup'
import AlertSnackBar from '../../components/AlertSnackBar'

import {styles} from './styles'
import allude from '../../assets/images/merchants/allude.png'
import spring from '../../assets/images/merchants/spring-and-summer.png'
import factory from '../../assets/images/merchants/the-factory-oulet.png'

class Merchants extends Component {
    state = {
        loading: false,
        searchValue: "",
        selectedMerchant: null,
        openMerchantPopup: false,
        openAlert: false,
        alertMessage: "",
        alertAction: '',
        categoriesData: [],
        merchantsData: []
    }

    categories = ["All", "Fashion", "Food", "Accessories", "Baby", "Books", "Groceries", "Health", "Homeware", "Hotels", "Valentine"]

    merchants = [
        {id: "1", title: "Allude", src: allude},
        {id: "2", title: "Spring & Summer", src: spring},
        {id: "3", title: "Factory outlet", src: factory},
        {id: "4", title: "Spring & Summer", src: spring},
        {id: "5", title: "Factory outlet", src: factory},
        {id: "6", title: "Allude", src: allude},
    ]

    componentDidMount() {

    }

    getMerchantsApi = async(page) => {
        try {
            this.setState({ loading: true })
            const token = null
            const merchantsData = await getMerchants(page, token)
            this.setState({ loading: false, merchantsData })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getMerchantCategoriesApi = async() => {
        try {
            this.setState({ loading: true })
            const token = null
            const categoriesData = await getMerchantCategories(token)
            this.setState({ loading: false, categoriesData })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    searchApi = async(value, page) => {
        try {
            this.setState({ loading: true })
            const token = null
            const merchantsData = await getMerchantByName(value, page, token)
            this.setState({ loading: false, merchantsData })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getMerchantsByCategoryApi = async(value, page) => {
        try {
            this.setState({ loading: true })
            const token = null
            const merchantsData = await getMerchantsByCategory(value, page, token)
            this.setState({ loading: false, merchantsData })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleCategoryOnPress = (item) => {
        if (item === "All") {
            this.getMerchantsApi(0)
        }
        else {
            this.getMerchantsByCategoryApi(item, 0)
        }
    }

    handleSearchOnPress = () => {
        const {searchValue} = this.state
        if (searchValue) {
            this.searchApi(searchValue, 0)
        }
        else {
            this.setErrorSnack("Fields cannot be empty")
        }
    }

    handleMerchantOnPress = (item) => {
        this.setState({ selectedMerchant: item, openMerchantPopup: true })
    }

    handleMerchantPopupClose = () => {
        this.setState({ selectedMerchant: null, openMerchantPopup: false })
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
    }

    renderMerchantPopup = (openMerchantPopup, selectedMerchant) => {
        return (
            <MerchantPopup
                open = {openMerchantPopup}
                selectedItem = {selectedMerchant}
                onClose = {this.handleMerchantPopupClose}
                handleCancel = {this.handleMerchantPopupClose}
            />
        )
    }

    renderMerchantItem = (item) => {
        const {id, title, src} = item
        return (
            <View style = {styles.merchant} key = {id}>
                <Merchant
                    title = {title}
                    source = {src}
                    onPress = {() => this.handleMerchantOnPress(item)}
                    onSelected = { false }
                />
            </View>
        )
    }

    renderFilterItem = (item, idx) => {
        return (
            <View style = {styles.filterItem} key = {idx}>
                <TouchableOpacity onPress = {() => this.handleCategoryOnPress(item)}>
                    <Text style = {styles.filterItemText}>{item}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderMerchants = () => {
        return (
            <View style = {styles.merchantsBlock}>
                <Text style = {styles.headerTitle}>Explore our merchants</Text>
                <View style = {styles.merchantList}>
                    <View style = {styles.row}>
                        { this.merchants.map(item => this.renderMerchantItem(item)) }
                    </View>
                </View>
            </View>
        )
    }

    renderFilters = () => {
        return (
            <View style = {styles.filterBlock}>
                <Text style = {styles.headerTitle}>Filter merchants by categories</Text>
                <View style = {styles.filterItemRoot}>
                    <View style = {styles.row}>
                        { this.categories.map((item, idx) => this.renderFilterItem(item, idx) )}
                    </View>
                </View>
            </View>
        )
    }

    renderSearch = () => {
        const {searchValue} = this.state
        return (
            <View style = {styles.searchBlock}>
                <Text style = {styles.headerTitle}>Search merchant by name</Text>
                <Search 
                    placeholder = "Merchant name" 
                    value = {searchValue} 
                    onChangeText = {this.handleOnChangeText}
                    name = "searchValue"
                    onPress = {this.handleSearchOnPress}
                />
            </View>
        )
    }

    render() {
        const {loading, openMerchantPopup, selectedMerchant, openAlert, alertMessage, alertAction} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "Merchants" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    <View style = {styles.mainRoot}>
                        { this.renderSearch() }
                        { this.renderFilters() }
                        { this.renderMerchants() }
                    </View>
                </ScrollView>
                { openMerchantPopup && selectedMerchant && this.renderMerchantPopup(openMerchantPopup, selectedMerchant) }
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}

export default Merchants