import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'

import {connect} from 'react-redux'

import {getMerchants, getMerchantsByCategory, getMerchantByName, getMerchantCategories} from '../../api/merchant'

import TopBar from '../../components/TopBar'
import Loading from '../../components/Loading'
import MerchantItem from '../../components/MerchantItem'
import Search from '../../components/Search'
import MerchantPopup from '../../components/MerchantPopup'
import AlertSnackBar from '../../components/AlertSnackBar'
import Pagination from '../../components/Pagination'

import {styles} from './styles'

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
        merchantsData: [],
        total: 0,
        current: 0,
        selectedCategory: "All",
        refreshing: false,
        searched: false
    }

    componentDidMount() {
        this.getMerchantsApi(0)
        this.getMerchantCategoriesApi()
    }

    getMerchantsApi = async(page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getMerchants(page, token)
            this.setState({ loading: false, merchantsData: data.merchantList, total: data.total, current: data.current + 1, refreshing: false })
        } catch (e) {
            this.setState({ loading: false, refreshing: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getMerchantCategoriesApi = async() => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
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
            const token = this.props.user.token
            const data = await getMerchantByName(value, page, token)
            this.setState({ loading: false, merchantsData: data.merchantList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getMerchantsByCategoryApi = async(value, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getMerchantsByCategory(value, page, token)
            this.setState({ loading: false, merchantsData: data.merchantList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleCategoryOnPress = (title) => {
        const {selectedCategory} = this.state
        if (selectedCategory !== title) {
            this.setState({ selectedCategory: title })
            if (title === "All") {
                this.getMerchantsApi(0)
            }
            else {
                this.getMerchantsByCategoryApi(title, 0)
            }
        }
    }

    handleSearchOnPress = () => {
        const {searchValue} = this.state
        if (searchValue) {
            this.searchApi(searchValue, 0)
            this.setState({ searched: true })
        }
        else {
            this.setErrorSnack("Fields cannot be empty")
        }
    }

    handleSearchOnClear = () => {
        this.getMerchantsApi(0)
        this.setState({ searched: false, searchValue: "" })
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

    handlePagination = (no) => {
        const {selectedCategory, searchValue} = this.state
        this.setState({ current: no})

        if (searchValue) {
            this.searchApi(searchValue, no - 1)
            this.setState({ searched: true })
        } 
        else {
            if (selectedCategory === "All") {
                this.getMerchantsApi(no - 1)
            } 
            else {
                this.getMerchantsByCategoryApi(selectedCategory, no - 1)
            }
        }
    }

    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getMerchantsApi(0)
    }

    renderNodataAvailable = () => {
        return (
            <View style = {styles.noDataAvailableRoot}>
                <Text style = {styles.noDataAvailable}>No data available</Text>
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

    renderMerchantItem = (item, id) => {
        const {name, src} = item
        return (
            <View style = {styles.merchant} key = {id}>
                <MerchantItem
                    title = {name}
                    source = {src}
                    onPress = {() => this.handleMerchantOnPress(item)}
                    onSelected = { false }
                />
            </View>
        )
    }

    renderFilterItem = (item, idx) => {
        const {selectedCategory} = this.state
        let selected = selectedCategory === item.title
        return (
            <View style = {selected ? styles.filterItemSelected : styles.filterItem} key = {idx}>
                <TouchableOpacity onPress = {() => this.handleCategoryOnPress(item.title)}>
                    <Text style = {selected ? styles.filterItemTextSelected : styles.filterItemText}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderMerchants = () => {
        const {merchantsData} = this.state
        return (
            <View style = {styles.merchantsBlock}>
                <Text style = {styles.headerTitle}>Explore our merchants</Text>
                <View style = {styles.merchantList}>
                    <View style = {styles.row}>
                        { 
                            merchantsData.length > 0 ?
                            merchantsData.map((item, idx) => this.renderMerchantItem(item, idx)) 
                            :
                            this.renderNodataAvailable()
                        }
                    </View>
                </View>
            </View>
        )
    }

    renderFilters = () => {
        const {categoriesData} = this.state
        return (
            <View style = {styles.filterBlock}>
                <Text style = {styles.headerTitle}>Filter merchants by categories</Text>
                <View style = {styles.filterItemRoot}>
                    <View style = {styles.row}>
                        { this.renderFilterItem({id: 0, title: "All"}, 0) }
                        { categoriesData.map((item, idx) => this.renderFilterItem(item, idx) )}
                    </View>
                </View>
            </View>
        )
    }

    renderSearch = () => {
        const {searchValue, searched} = this.state
        return (
            <View style = {styles.searchBlock}>
                <Text style = {styles.headerTitle}>Search merchant by name</Text>
                <Search 
                    placeholder = "Merchant name" 
                    value = {searchValue} 
                    onChangeText = {this.handleOnChangeText}
                    name = "searchValue"
                    onPress = {this.handleSearchOnPress}
                    onClear = {this.handleSearchOnClear}
                    searched = {searched}
                />
            </View>
        )
    }

    render() {
        const {loading, openMerchantPopup, selectedMerchant, openAlert, alertMessage, alertAction, total, current, refreshing} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "Merchants" navigation = {this.props.navigation}/>
                <ScrollView 
                    style = {styles.scrollView} 
                    indicatorStyle = "white"
                    refreshControl = {
                        <RefreshControl refreshing = {refreshing} onRefresh = {this.onRefresh}/>
                    }
                >
                    <View style = {styles.mainRoot}>
                        { this.renderSearch() }
                        { this.renderFilters() }
                        { this.renderMerchants() }
                        { total > 0 && this.renderPagination(total, current) }
                    </View>
                </ScrollView>
                { openMerchantPopup && selectedMerchant && this.renderMerchantPopup(openMerchantPopup, selectedMerchant) }
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps)(Merchants)