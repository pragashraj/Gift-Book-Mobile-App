import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'

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
        confirmPassword: ""
    }

    INPUTS = [
        {id: "1", name: "name", placeholder: "Name", secureTextEntry: false, icon: nameIcon},
        {id: "2", name: "email", placeholder: "Email", secureTextEntry: false, icon: emailIcon},
        {id: "3", name: "password", placeholder: "Password", secureTextEntry: true, icon: keyIcon},
        {id: "4", name: "confirmPassword", placeholder: "Confirm Password", secureTextEntry: true, icon: confirmIcon},
    ]

    handleBtnOnClick = () => {

    }

    handleSignInOnClick = () => {
        this.props.navigation.navigate("Sign-In")
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    renderForm = () => {
        return (
            <View style = {styles.form}>
                { this.INPUTS.map(input => {
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
                }) }
            </View>
        )
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.imageRoot}>
                    <Image style = {styles.wallpaper} source = {wallpaper}/>
                </View>
                <View style = {styles.formRoot}>
                    { this.renderForm() }
                </View>
                <View style = {styles.btnRoot}>
                    <Button text = "SIGN UP" handleBtnOnClick = {this.handleBtnOnClick}/>
                </View>
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Already have an account ?</Text>
                    <TouchableOpacity onPress = {this.handleSignInOnClick}>
                        <Text style = {styles.footerLink}>SIGN-IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignUp