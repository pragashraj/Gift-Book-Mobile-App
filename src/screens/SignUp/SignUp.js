import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import AlertSnackBar from '../../components/AlertSnackBar'

import nameIcon from '../../assets/icons/name.png'
import emailIcon from '../../assets/icons/email.png'
import keyIcon from '../../assets/icons/key.png'
import confirmIcon from '../../assets/icons/confirm.png'
import wallpaper from '../../assets/wallpapers/Signup.jpg'

import {styles} from './styles'

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        openAlert: false,
        alertMessage: ""
    }

    INPUTS = [
        {id: "1", name: "name", placeholder: "Name", secureTextEntry: false, icon: nameIcon},
        {id: "2", name: "email", placeholder: "Email", secureTextEntry: false, icon: emailIcon},
        {id: "3", name: "password", placeholder: "Password", secureTextEntry: true, icon: keyIcon},
        {id: "4", name: "confirmPassword", placeholder: "Confirm Password", secureTextEntry: true, icon: confirmIcon},
    ]

    handleSignUpApi = async(data) => {
        try {

        } catch (e) {

        }
    }

    handleSignUpOnClick = () => {
        const {name, email, password, confirmPassword} = this.state
        if (name && email && password && confirmPassword) {
            if (!this.confirmEmail(email)) {
                this.setAlert("Enter valid email address")
            }
            else if (password !== confirmPassword) {
                this.setState({ openAlert: true, alertMessage: "Passwords not matched" })
            }
            else {
                const data = {name, email, password}
                this.handleSignUpApi(data)
            }
        } 
        else {
            this.setState({ openAlert: true, alertMessage: "Fields cannot be empty" })
        }
    }

    handleSignInOnClick = () => {
        this.props.navigation.navigate("Sign-In")
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    confirmEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    renderInputFields = () => {
        return this.INPUTS.map(input => {
            const {placeholder, secureTextEntry, name, icon, id} = input
            return (
                <Input
                    placeholder = {placeholder}
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

    renderForm = () => {
        return (
            <View style = {styles.form}>
                { this.renderInputFields() }
            </View>
        )
    }

    renderFooter = () => (
        <View style = {styles.footer}>
            <Text style = {styles.footerText}>Already have an account ?</Text>
            <TouchableOpacity onPress = {this.handleSignInOnClick}>
                <Text style = {styles.footerLink}>SIGN-IN</Text>
            </TouchableOpacity>
        </View>
    )

    renderButton = () => (
        <Button text = "SIGN UP" handleBtnOnClick = {this.handleSignUpOnClick}/>
    )

    renderBackground = () => (
        <Image style = {styles.wallpaper} source = {wallpaper}/>
    )

    render() {
        const {openAlert, alertMessage} = this.state
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
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage}/> }
            </View>
        )
    }
}

export default SignUp