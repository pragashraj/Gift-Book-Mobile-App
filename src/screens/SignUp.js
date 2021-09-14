import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native'

import Input from '../components/Input'
import Button from '../components/Button'

import nameIcon from '../assets/icons/name.png'
import emailIcon from '../assets/icons/email.png'
import keyIcon from '../assets/icons/key.png'
import confirmIcon from '../assets/icons/confirm.png'
import wallpaper from '../assets/wallpapers/wallpaper2.jpg'

import {primaryColor} from '../values/values'

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
        console.log("clicked");
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

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageRoot: {
        height: screenHight,
        width: screenWidth,
        position: "absolute"
    },
    wallpaper: {
        width: "100%",
        height: "100%"
    },
    formRoot: {
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        elevation: 1,
        padding: 5,
        borderRadius: 30
    },
    btnRoot: {
        justifyContent: "center",
        width: "90%",
        marginTop: 15,
    },
    footer: {
        position: "absolute",
        elevation: 1,
        bottom: 0,
        height: 50,
        width: "100%",
        borderColor: primaryColor,
        borderTopWidth: 1,
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        flexDirection: 'row'
    },
    footerText: {
        color: "#fff",
        fontSize: 15
    },
    footerLink: {
        color: primaryColor,
        fontSize: 16,
        marginLeft: 7,
        fontWeight: "bold"
    }
})

export default SignUp