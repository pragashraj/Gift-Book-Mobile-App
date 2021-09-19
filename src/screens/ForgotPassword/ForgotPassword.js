import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'

import wallpaper from '../../assets/wallpapers/ForgotPassword.jpg'
import emailIcon from '../../assets/icons/email.png'
import codeIcon from '../../assets/icons/code.png'

import {styles} from './styles'

class ForgotPassword extends Component {
    state = {
        index: 0,
        email: "",
        code: "",
        btnText: "SEND",
        infoTextMessage: "Don't worry let us know your email, we will send a reset code for you."
    }

    MessageText = [
        "Don't worry let us know your email, we will send a reset code for you.",
        "Please enter the reset code that we send to your email",
        "Change your new password here!"
    ]

    ButtonText = ["SEND", "CONFIRM", "RESET"]

    handlePasswordChange = () => {
        const newIndex = 0
        this.setContentState(newIndex)
    }

    handleConfirmResetCode = () => {
        const newIndex = this.state.index + 1
        this.setContentState(newIndex)
    }

    handleSendResetCode = () => {
        const newIndex = this.state.index + 1
        this.setContentState(newIndex)
    }

    handleBtnOnClick = () => {
        switch(this.state.index) {
            case 0 : this.handleSendResetCode()
                    break
            case 1 : this.handleConfirmResetCode()
                    break
            case 2 : this.handlePasswordChange()
                    break
            default: return
        }
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    setContentState = (newIndex) => {
        this.setState({ 
            index: newIndex, 
            btnText: this.ButtonText[newIndex],
            infoTextMessage: this.MessageText[newIndex]
        })
    }

    renderInputField = (placeholder, name, icon) => {
        return <Input
            placeholder = {placeholder}
            secureTextEntry = {false}
            value = {this.state[name]}
            onChangeText = {this.handleOnChangeText}
            name = {name}
            icon = {icon}
        />
    }

    renderChangePassword = () => {
        return (
            <View style = {styles.form}>

            </View>
        )
    }

    renderResetCodeProvider = () => {
        return (
            <View style = {styles.form}>
                { this.renderInputField("Code", "code", codeIcon) }
            </View>
        )
    }

    renderEmailprovider = () => {
        return (
            <View style = {styles.form}>
                { this.renderInputField("Email", "email", emailIcon) }
            </View>
        )
    }

    renderMain = () => {
        const index = this.state.index
        return (
            <View style = {styles.main}>
                {
                    index === 0 ? this.renderEmailprovider() :
                    index === 1 ? this.renderResetCodeProvider() :
                    index === 2 && this.renderChangePassword()
                }
            </View>
        )
    }

    renderInfo = () => {
        const message = this.state.infoTextMessage
        return (
            <Text style = {styles.infoText}>{message}</Text>
        )
    }
    
    renderButton = () => {
        const {btnText} = this.state
        return <Button text = {btnText} handleBtnOnClick = {this.handleBtnOnClick}/>
    }

    renderBackground = () => (
        <Image style = {styles.wallpaper} source = {wallpaper}/>
    )

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.imageRoot}>
                    { this.renderBackground() }
                </View>
                <View style = {styles.infoRoot}>
                    { this.renderInfo() }
                </View>
                <View style = {styles.mainRoot}>
                    { this.renderMain() }
                </View>
                <View style = {styles.btnRoot}>
                    { this.renderButton() }
                </View>
            </View>
        )
    }
}

export default ForgotPassword