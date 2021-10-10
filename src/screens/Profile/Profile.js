import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native'

import {connect} from 'react-redux'

import {getProfileDetails, updateProfileDetails, updatePaymentCardDetails, changePassword} from '../../api/user'
import {storeLoginResponse} from '../../redux/actions/authAction'

import TopBar from '../../components/TopBar'
import CustomInput from '../../components/CustomInput'
import Button from '../../components/Button'
import ProfileEditor from './ProfileEditor'
import PaymentCard from './PaymentCard'
import AlertSnackBar from '../../components/AlertSnackBar'
import Loading from '../../components/Loading'

import ProfileCover from '../../assets/images/screens/coverD.jpg'
import user from '../../assets/images/others/user.jpg'
import edit from '../../assets/images/icons/edit.png'
import notVisible from '../../assets/images/icons/notVisible.png'
import visible from '../../assets/images/icons/visible.png'

import {styles} from './styles'

class Profile extends Component {
    state = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        passwordVisible: false,
        openProfileEditor: false,
        name: "",
        email: "",
        address: "",
        district: "",
        contact: "",
        cardType: "",
        cardNo: "",
        openCardEditor: false,
        openAlert: false,
        loading: false,
        alertMessage: "",
        alertAction: '',
        profileData: null,
        profileDetailsData: [],
        paymentCardData: []
    }

    stat = [
        {id: "1", count: 0, label: "Total"},
        {id: "2", count: 0, label: "Active"},
        {id: "3", count: 0, label: "Expired"},
    ]

    componentDidMount() {
        const authenticatedEmail = this.props.user && this.props.user.email
        if (authenticatedEmail) {
            this.getProfileDetailsApi(authenticatedEmail)
        }
    }

    getProfileDetailsApi = async(email) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getProfileDetails(email, token)
            if (data) {
                this.setProfileDetails(data)
                this.setPaymentCardDetails(data)
            }
            this.setState({ loading: false, profileData: data })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    changePasswordApi = async(data) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const response = await changePassword(data, token)
            if (response.success) {
                this.setSuccessSnack(response.message)
            }
            this.setState({ loading: false, currentPassword: "", newPassword: "", confirmPassword: "" })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    updateProfileDetailsApi = async(data) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const response = await updateProfileDetails(data, token)
            if (response.success) {
                this.setSuccessSnack(response.message)
            }
            this.setState({ loading: false, openProfileEditor: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    updatePaymentCardDetailsApi = async(data) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const response = await updatePaymentCardDetails(data, token)
            if (response.success) {
                this.setSuccessSnack(response.message)
            }
            this.setState({ loading: false, openCardEditor: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handlePasswordChange = () => {
        const {currentPassword, newPassword, confirmPassword} = this.state
        if (currentPassword && newPassword && confirmPassword) {
            if (currentPassword !== newPassword) {
                if (newPassword === confirmPassword) {
                    const email = this.props.user.email
                    const data = {email, oldPassword: currentPassword, newPassword}
                    this.changePasswordApi(data)
                }
                else {
                    this.setErrorSnack("New, Confirm passwords not matched")
                }
            }
            else {
                this.setErrorSnack("New password cannot be same as old")
            }
        } 
        else {
            this.setErrorSnack("Fields cannot be empty")
        }
    }

    handleUpdateOnPress = () => {
        const {name, email, address, district, contact} = this.state
        if (name && email && address && district && contact) {
            if (this.confirmEmail(email)) {
                const data = {email, name, address, district, contact}
                this.updateProfileDetailsApi(data)
            }
            else {
                this.setErrorSnack("Enter valid email address")
            }
        } 
        else {
            this.setErrorSnack("Fields cannot be empty")
        }
    }

    handleCardUpdateOnPress = () => {
        const {cardNo, cardType} = this.state
        if (cardNo && cardType) {
            const email = this.props.user.email
            const data = {email, cardType, cardNo}
            this.updatePaymentCardDetailsApi(data)
        }
        else {
            this.setErrorSnack("Fields cannot be empty")
        }
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    handleEditOnClick = (tag) => {
        if (tag === "Profile") {
            this.setState({ openProfileEditor: true })
        }
        else if(tag === "Payment") {
            this.setState({ openCardEditor: true })
        }
    }

    handleProfileEditorOnClose = () => {
        const data = this.state.profileData
        this.setState({ 
            openProfileEditor: false,
            name: data.name,
            email: data.email,
            address: data.address,
            district: data.district,
            contact: data.contact
        })
    }

    handleCardEditorOnClose = () => {
        const data = this.state.profileData
        this.setState({ openCardEditor: false, cardType: data.cardType, cardNo: data.cardNo })
    }

    visibilityIconPress = () => {
        this.setState({passwordVisible: !this.state.passwordVisible})
    }

    confirmEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    createContent = (content, value) => {
        const item = {content: content, value: value}
        return item
    }

    setProfileDetails = (data) => {
        let profileDetailsData = []
        profileDetailsData.push(this.createContent("Email", data.email))
        profileDetailsData.push(this.createContent("Name", data.name))
        profileDetailsData.push(this.createContent("Address", data.address))
        profileDetailsData.push(this.createContent("District", data.district))
        profileDetailsData.push(this.createContent("Contact", data.contact))

        this.setState({ 
            profileDetailsData,
            name: data.name,
            email: data.email,
            address: data.address,
            district: data.district,
            contact: data.contact
        })
    }

    setPaymentCardDetails = (data) => {
        let paymentCardData = []
        paymentCardData.push(this.createContent("CardType", data.cardNo))
        paymentCardData.push(this.createContent("CardNo", data.cardType))

        this.setState({ paymentCardData, cardNo: data.cardNo, cardType: data.cardType })
    }

    setSuccessSnack = (message) => {
        this.setAlert(message, 'Success')
    }

    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
    }

    renderPaymentCardEditor = (open) => {
        return (
            <PaymentCard
                open = {open}
                values = {this.state}
                onClose = {this.handleCardEditorOnClose}
                handleCancel = {this.handleCardEditorOnClose}
                handleUpdateOnPress = {this.handleCardUpdateOnPress}
                handleOnChangeText = {this.handleOnChangeText}
            />
        )
    }

    renderProfileEditor = (open) => {
        return (
            <ProfileEditor
                open = {open}
                values = {this.state}
                onClose = {this.handleProfileEditorOnClose}
                handleCancel = {this.handleProfileEditorOnClose}
                handleUpdateOnPress = {this.handleUpdateOnPress}
                handleOnChangeText = {this.handleOnChangeText}
            />
        )
    }

    renderInput = (placeholder, secure, name, icon) => {
        return (
            <CustomInput
                placeholder = {placeholder}
                secureTextEntry = {secure}
                value = {this.state[name]}
                onChangeText = {this.handleOnChangeText}
                name = {name}
                icon = {icon}
                onIconPress = {this.visibilityIconPress}
            />
        )
    }

    renderDetailContent = (item, id) => {
        const {content, value} = item
        return (
            <View style = {styles.detailBlock} key = {id}>
                <Text style = {styles.detailContent}>{content}</Text>
                <Text style = {styles.detailValue}>{value}</Text>
            </View>
        )
    }

    renderChangepassword = () => {
        const passwordVisible = this.state.passwordVisible
        return (
            <View style = {styles.profileDetails}>
                <View style = {styles.contentHeader}>
                    <Text style = {styles.headerTitle}>Change Password</Text>
                </View>
                <View style = {styles.detailContainer}>
                    { this.renderInput("Current password", true, "currentPassword", null) }
                    { this.renderInput("New password", !passwordVisible, "newPassword", passwordVisible ? notVisible : visible) }
                    { this.renderInput("Confirm password", true, "confirmPassword", null) }
                    <Button text = "Change" handleBtnOnClick = {this.handlePasswordChange}/>
                </View>
            </View>
        )
    }

    renderPaymentDetails = () => {
        const {paymentCardData} = this.state
        return (
            <View style = {styles.profileDetails}>
                <View style = {styles.contentHeader}>
                    <Text style = {styles.headerTitle}>Payment Details</Text>
                    <TouchableOpacity onPress = {() => this.handleEditOnClick("Payment")}>
                        <Image style = {styles.contentHeaderImage} source = {edit}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.detailContainer}>
                    { paymentCardData.map((item, idx) => this.renderDetailContent(item, idx) ) }
                </View>
            </View>
        )
    }

    renderprofileDetails = () => {
        const {profileDetailsData} = this.state
        return (
            <View style = {styles.profileDetails}>
                <View style = {styles.contentHeader}>
                    <Text style = {styles.headerTitle}>Profile Details</Text>
                    <TouchableOpacity onPress = {() => this.handleEditOnClick("Profile")}>
                        <Image style = {styles.contentHeaderImage} source = {edit}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.detailContainer}>
                    { profileDetailsData.map((item, idx) => this.renderDetailContent(item, idx) ) }
                </View>
            </View>
        )
    }

    renderVoucherStat = () => {
        return (
            <View style = {styles.voucherStatRoot}>
                <Text style = {styles.headerTitle}>My vouchers</Text>
                <View style = {styles.vouchers}>
                    { this.stat.map(item => {
                        const {id, count, label} = item 
                        return (
                            <View key = {id}>
                                <Text style = {styles.vouchersCount}>{count}</Text>
                                <Text style = {styles.voucherText}>{label}</Text>
                            </View>
                        )
                    }) }
                </View>
            </View>
        )
    }

    renderProfiler = () => {
        const authUser = this.props.user
        return (
            <View style = {styles.profileRoot}>
                <View style = {styles.personal}>
                    <View style = {styles.profileImageBlock}>
                        <Image style = {styles.profileImage} source = {user}/>
                    </View>
                    <View style = {styles.profilerBlock}>
                        <Text style = {styles.profilerFN}>{authUser && authUser.email}</Text>
                        <Text style = {styles.profilerLN}>{authUser && authUser.name}</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderMain = () => {
        return (
            <View style = {styles.mainContainer}>
                { this.renderProfiler() }
                { this.renderVoucherStat() }
                { this.renderprofileDetails() }
                { this.renderPaymentDetails() }
                { this.renderChangepassword() }
            </View>
        )
    }

    renderProfileCover = () => {
        return (
            <View style = {styles.profileCoverRoot}>
                <Image style = {styles.coverWallpaper} source = {ProfileCover}/>
            </View>
        )
    }

    render() {
        const {openProfileEditor, openCardEditor, openAlert, alertMessage, loading, alertAction} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Profile" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderProfileCover() }
                    { this.renderMain() }
                </ScrollView>
                { openProfileEditor && this.renderProfileEditor(openProfileEditor) }
                { openCardEditor && this.renderPaymentCardEditor(openCardEditor) }
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps)(Profile)