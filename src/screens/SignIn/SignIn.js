import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import emailIcon from '../../assets/icons/email.png'
import keyIcon from '../../assets/icons/key.png'
import wallpaper from '../../assets/wallpapers/Signin.jpg'

import {styles} from './styles'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        openAlert: false,
        alertMessage: ""
    }

    INPUTS = [
        {id: "1", name: "email", placeholder: "Email", secureTextEntry: false, icon: emailIcon},
        {id: "2", name: "password", placeholder: "Password", secureTextEntry: true, icon: keyIcon},
    ]

    handleSignInApi = (data) => {

    }

    handleSignInOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            const data = {email, password}
            this.handleSignInApi(data)
        } 
        else {
            this.setState({ openAlert: true, alertMessage: "" })
        }
    }

    handleSignUpOnClick = () => {
        this.props.navigation.navigate("Sign-Up")
    }

    handleForgotPasswordOnClick = () => {
        this.props.navigation.navigate("Forgot-Password")
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    renderInputFields = () => {
        return this.INPUTS.map(input => {
            const {placeholder, secureTextEntry, name, icon, id} = input
            return (
                <Input
                    placeholder = {placeholder}
                    defaultValue = ""
                    secureTextEntry = {secureTextEntry}
                    value = {this.state[name]}
                    onChangeText = {this.handleOnChangeText}
                    name = {name}
                    icon = {icon}
                    key = {id}
                />
            )
        }) 
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
                { this.renderInputFields() }
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
            </View>
        )
    }
}

export default SignIn