import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import {signIn} from '../../api/auth'

import Input from '../../components/Input'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'
import AlertSnackBar from '../../components/AlertSnackBar'
import Loading from '../../components/Loading'

import emailIcon from '../../assets/images/icons/email.png'
import notVisible from '../../assets/images/icons/notVisible.png'
import visible from '../../assets/images/icons/visible.png'

import wallpaper from '../../assets/images/screens/signin.jpg'

import {styles} from './styles'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        openAlert: false,
        alertMessage: "",
        visibility: false,
        loading: false,
        alertAction: ''
    }

    handleSignInApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await signIn(data)
            this.setSuccessSnack("Login Successful")
            this.props.navigation.navigate("Home")
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    handleSignInOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            if (!this.confirmEmail(email)) {
                this.setErrorSnack("Enter valid email address")
            }
            else {
                const data = {email, password}
                this.handleSignInApi(data)
            }
        } 
        else {
            this.setErrorSnack("Fields cannot be empty")
        }
    }

    handleSignUpOnClick = () => {
        this.props.navigation.navigate("Sign-Up")
    }

    handleForgotPasswordOnClick = () => {
        this.props.navigation.navigate("Forgot-Password")
    }

    handleIconOnClick = () => {
        this.setState({ visibility: !this.state.visibility })
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    confirmEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
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

    renderEmailInputField = () => {
        return <Input
            placeholder = "Email"
            secureTextEntry = {false}
            value = {this.state.email}
            onChangeText = {this.handleOnChangeText}
            name = "email"
            icon = {emailIcon}
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

    renderForgotPassword = () => {
        return (
            <View style = {styles.forgotPasswordRoot}>
                <TouchableOpacity onPress = {this.handleForgotPasswordOnClick}>
                    <Text style = {styles.forgotPasswordLink}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderForm = () => {
        return (
            <View style = {styles.form}>
                { this.renderEmailInputField() }
                { this.renderPasswordInputField() }
                { this.renderForgotPassword() }
            </View>
        )
    }

    renderFooter = () => (
        <View style = {styles.footer}>
            <Text style = {styles.footerText}>Not a member ?</Text>
            <TouchableOpacity onPress = {this.handleSignUpOnClick}>
                <Text style = {styles.footerLink}>SIGN-UP</Text>
            </TouchableOpacity>
        </View>
    )

    renderButton = () => (
        <Button text = "SIGN IN" handleBtnOnClick = {this.handleSignInOnClick}/>
    )

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
                <View style = {styles.formRoot}>
                    { this.renderForm() }
                </View>
                <View style = {styles.btnRoot}>
                    { this.renderButton() }
                </View>
                <View style = {styles.footerRoot}>
                    { this.renderFooter() }
                </View>
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
                { loading && <Loading open = {loading}/> }
            </View>
        )
    }
}

export default SignIn