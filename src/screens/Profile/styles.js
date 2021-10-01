import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#EAECEE"
    },
    profileCoverRoot: {
        width: "100%",
        height: screenHight * 0.4,
    },
    coverWallpaper: {
        width: "100%",
        height: "100%"
    },
    profileRoot: {
        width: "90%",
        marginLeft: "5%",
        height: screenHight * 0.3,
        marginTop: -50,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    personal: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: "70%",
    },
    vouchers: {
        width: "100%",
        height: "30%",
        justifyContent: "center",
        paddingLeft: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    vouchersCount: {
        color: primaryColor,
        fontSize: 25
    },
    profileImageBlock: {
        width: "45%",
        height: "100%",
        marginTop: -50,
        marginLeft: "5%",
        borderRadius: 20,
    },
    profileImage: {
        width: "100%",
        height: 180,
        borderRadius: 20,
    },
    profilerBlock: {
        width: "45%",
        marginLeft: "5%",
        justifyContent: "center"
    },
    profilerFN: {
        fontSize: 16,
        textTransform: "uppercase",
    },
    profilerLN: {
        fontSize: 30,
        color: "#D98880",
        fontFamily: 'serif',
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    mainRoot: {
        width: "100%",
        height: screenHight * 0.4,
        marginTop: 25,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20
    },
    profileDetails: {
        marginTop: 25
    },
    contentHeader: {
        color: "grey",
        textTransform: "uppercase"
    }
})