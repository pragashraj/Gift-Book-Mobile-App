import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native'

import TopBar from '../../components/TopBar'
import CustomInput from '../../components/CustomInput'
import Button from '../../components/Button'

import ProfileCover from '../../assets/wallpapers/screens/coverD.jpg'
import user from '../../assets/wallpapers/others/user.jpg'
import edit from '../../assets/wallpapers/icons/edit.png'
import notVisible from '../../assets/wallpapers/icons/notVisible.png'
import visible from '../../assets/wallpapers/icons/visible.png'

import {styles} from './styles'

class Profile extends Component {
    state = {
        currentPasssword: "",
        newPassword: "",
        confirmPasssword: "",
        passwordVisible: false
    }

    stat = [
        {id: "1", count: 0, label: "Total"},
        {id: "2", count: 0, label: "Active"},
        {id: "3", count: 0, label: "Expired"},
    ]

    proDetail = [
        {id: "1", content: "Name", value: "Chris evans"},
        {id: "2", content: "Email", value: "steveRogers@gmail.com"},
        {id: "3", content: "Address", value: "22/A, Brooklyn"},
        {id: "4", content: "District", value: "Colombo"},
        {id: "5", content: "Contact", value: "07724****6"},
    ]

    payDetail = [
        {id: "1", content: "Card", value: "Master"},
        {id: "2", content: "Card No", value: "12348975615"},
    ]

    handlePasswordChange = () => {

    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    handleEditOnClick = (tag) => {
        
    }

    visibilityIconPress = () => {
        this.setState({passwordVisible: !this.state.passwordVisible})
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

    renderDetailContent = (item) => {
        const {id, content, value} = item
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
                    <Text style = {styles.contentHeaderText}>Change Password</Text>
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
        return (
            <View style = {styles.profileDetails}>
                <View style = {styles.contentHeader}>
                    <Text style = {styles.contentHeaderText}>Payment Details</Text>
                    <TouchableOpacity onPress = {() => this.handleEditOnClick("Payment")}>
                        <Image style = {styles.contentHeaderImage} source = {edit}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.detailContainer}>
                    { this.payDetail.map(item => this.renderDetailContent(item) ) }
                </View>
            </View>
        )
    }

    renderprofileDetails = () => {
        return (
            <View style = {styles.profileDetails}>
                <View style = {styles.contentHeader}>
                    <Text style = {styles.contentHeaderText}>Profile Details</Text>
                    <TouchableOpacity onPress = {() => this.handleEditOnClick("Profile")}>
                        <Image style = {styles.contentHeaderImage} source = {edit}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.detailContainer}>
                    { this.proDetail.map(item => this.renderDetailContent(item) ) }
                </View>
            </View>
        )
    }

    renderStat = () => {
        return (
            <View style = {styles.vouchers}>
                { this.stat.map(item => {
                    const {id, count, label} = item 
                    return (
                        <View style = {styles.countRoot} key = {id}>
                            <Text style = {styles.vouchersCount}>{count}</Text>
                            <Text style = {styles.voucherText}>{label}</Text>
                        </View>
                    )
                }) }
            </View>
        )
    }

    renderMainRoot = () => {
        return (
            <View style = {styles.mainRoot}>
                { this.renderStat() }
                { this.renderprofileDetails() }
                { this.renderPaymentDetails() }
                { this.renderChangepassword() }
            </View>
        )
    }

    renderProfiler = () => {
        return (
            <View style = {styles.profileRoot}>
                <View style = {styles.personal}>
                    <View style = {styles.profileImageBlock}>
                        <Image style = {styles.profileImage} source = {user}/>
                    </View>
                    <View style = {styles.profilerBlock}>
                        <Text style = {styles.profilerFN}>Chris</Text>
                        <Text style = {styles.profilerLN}>Evans</Text>
                    </View>
                </View>
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
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Profile" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderProfileCover() }
                    { this.renderProfiler() }
                    { this.renderMainRoot() }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Profile