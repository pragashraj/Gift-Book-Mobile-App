import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
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
})