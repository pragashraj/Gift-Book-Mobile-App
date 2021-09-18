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
    }

    INPUTS = [
        {id: "1", name: "email", placeholder: "Email", secureTextEntry: false, icon: emailIcon},
        {id: "2", name: "password", placeholder: "Password", secureTextEntry: true, icon: keyIcon},
    ]

    handleBtnOnClick = () => {

    }

    handleSignUpOnClick = () => {
        this.props.navigation.navigate("Sign-Up")
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
                    <Button text = "SIGN IN" handleBtnOnClick = {this.handleBtnOnClick}/>
                </View>
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Not a member ?</Text>
                    <TouchableOpacity onPress = {this.handleSignUpOnClick}>
                        <Text style = {styles.footerLink}>SIGN-UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignIn