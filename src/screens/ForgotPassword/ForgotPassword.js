import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'
import AlertPopup from '../../components/AlertPopup'

import wallpaper from '../../assets/wallpapers/ForgotPassword.jpg'
import emailIcon from '../../assets/icons/email.png'
import codeIcon from '../../assets/icons/code.png'
import confirmIcon from '../../assets/icons/confirm.png'
import notVisible from '../../assets/icons/notVisible.png'
import visible from '../../assets/icons/visible.png'

import {styles} from './styles'

class ForgotPassword extends Component {
    state = {
        index: 0,
        email: "",
        code: "",
        password: "",
        confirmPassword: "",
        btnText: "SEND",
        infoTextMessage: "Don't worry let us know your email, we will send a reset code for you.",
        visibility: false,
        openAlert: false,
        alertMessage: "",
    }

    MessageText = [
        "Don't worry let us know your email, we will send a reset code for you.",
        "Please enter the reset code that we send to your email",
        "Change your new password here!"
    ]

    ButtonText = ["SEND", "CONFIRM", "RESET"]

    handlePasswordChangeApi = (data) => {
        this.setContentState(0)
    }

    handleConfirmResetCodeApi = (code) => {
        const {index} = this.state
        this.setContentState(index + 1)
    }

    handleSendResetCodeApi = (email) => {
        const {index} = this.state
        this.setContentState(index + 1)
    }

    handlePasswordChange = () => {
        const {password, confirmPassword, email} = this.state
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                const data = {email, password}
                this.handlePasswordChangeApi(data)
            }
            else {
                this.setAlert("Passwords not matched")
            }
        }
        else {
            this.setAlert("Password or confirmPassword code cannot be empty")
        }
    }

    handleConfirmResetCode = () => {
        const {code} = this.state
        if (code) {
            this.handleConfirmResetCodeApi(code)
        }
        else {
            this.setAlert("Reset code cannot be empty")
        }
    }

    handleSendResetCode = () => {
        const {email} = this.state
        if (email) {
            this.handleSendResetCodeApi(email)
        } 
        else {
            this.setAlert("Email cannot be empty")
        }
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

    handleIconOnClick = () => {
        this.setState({ visibility: !this.state.visibility })
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

    setAlert = (message) => {
        this.setState({
            openAlert: true,
            alertMessage: message
        })
    }

    renderInputField = (placeholder, name, icon, secureTextEntry) => {
        return <Input
            placeholder = {placeholder}
            secureTextEntry = {secureTextEntry}
            value = {this.state[name]}
            onChangeText = {this.handleOnChangeText}
            name = {name}
            icon = {icon}
        />
    }

    renderPasswordInputField = () => {
        const {visibility, password} = this.state
        return <PasswordInput
            placeholder = "Password"
            secureTextEntry = {!visibility}
            value = {password}
            onChangeText = {this.handleOnChangeText}
            name = "password"
            icon = { visibility ? notVisible : visible }
            onIconPress = {this.handleIconOnClick}
        />
    }

    renderChangePassword = () => {
        return (
            <View style = {styles.form}>
                { this.renderPasswordInputField() }
                { this.renderInputField("Confirm Password", "confirmPassword", confirmIcon, true) }
            </View>
        )
    }

    renderResetCodeProvider = () => {
        return (
            <View style = {styles.form}>
                { this.renderInputField("Code", "code", codeIcon, false) }
            </View>
        )
    }

    renderEmailprovider = () => {
        return (
            <View style = {styles.form}>
                { this.renderInputField("Email", "email", emailIcon, false) }
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
                <AlertPopup open = {true} message = "Hello world!"/>
            </View>
        )
    }
}

export default ForgotPassword