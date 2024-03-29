import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import {sendResetCode, confirmResetCode, changePassword} from '../../api/auth'

import Input from '../../components/Input'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'
import AlertSnackBar from '../../components/AlertSnackBar'
import Loading from '../../components/Loading'

import wallpaper from '../../assets/images/screens/forgotPassword.jpg'
import emailIcon from '../../assets/images/icons/email.png'
import codeIcon from '../../assets/images/icons/code.png'
import confirmIcon from '../../assets/images/icons/confirm.png'
import notVisible from '../../assets/images/icons/notVisible.png'
import visible from '../../assets/images/icons/visible.png'

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
        loading: false,
        alertAction: ''
    }

    MessageText = [
        "Don't worry let us know your email, we will send a reset code for you.",
        "Please enter the reset code that we send to your email",
        "Change your new password here!"
    ]

    ButtonText = ["SEND", "CONFIRM", "RESET"]

    handlePasswordChangeApi = async(email, password) => {
        try {
            this.setState({ loading: true })

            const response = await changePassword(email, password)
            if (response.success) {
                this.setContentState(0)
                this.setSuccessSnack(response.message)
            }

            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleConfirmResetCodeApi = async(email, code) => {
        try {
            this.setState({ loading: true })
            const {index} = this.state
            
            const response = await confirmResetCode(email, code)
            if (response.success) {
                this.setContentState(index + 1)
                this.setSuccessSnack(response.message)
            }

            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleSendResetCodeApi = async(email) => {
        try {
            this.setState({ loading: true })
            const {index} = this.state

            const response = await sendResetCode(email)
            if (response.success) {
                this.setContentState(index + 1)
                this.setSuccessSnack(response.message)
            }

            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handlePasswordChange = () => {
        const {password, confirmPassword, email} = this.state
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                this.handlePasswordChangeApi(email, password)
            }
            else {
                this.setErrorSnack("Passwords not matched")
            }
        }
        else {
            this.setErrorSnack("Password or confirmPassword cannot be empty")
        }
    }

    handleConfirmResetCode = () => {
        const {code, email} = this.state
        if (code) {
            this.handleConfirmResetCodeApi(email, code)
        }
        else {
            this.setErrorSnack("Reset code cannot be empty")
        }
    }

    handleSendResetCode = () => {
        const {email} = this.state
        if (email) {
            if (!this.confirmEmail(email)) {
                this.setErrorSnack("Enter valid email address")
            }
            else {
                this.handleSendResetCodeApi(email)
            }
        } 
        else {
            this.setErrorSnack("Email cannot be empty")
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
        this.setState({ 
            [name]: value,
            openAlert: false,
            alertMessage: "",
        })
    }

    setContentState = (newIndex) => {
        this.setState({ 
            index: newIndex, 
            btnText: this.ButtonText[newIndex],
            infoTextMessage: this.MessageText[newIndex]
        })
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

    confirmEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
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
                    index === 0 ? this.renderEmailprovider() 
                    :
                    index === 1 ? this.renderResetCodeProvider() 
                    :
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
        const {openAlert, alertMessage, loading, alertAction} = this.state
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
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
                { loading && <Loading open = {loading}/> }
            </View>
        )
    }
}

export default ForgotPassword