import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#EAECEE",
    },
    profileCoverRoot: {
        width: "100%",
        height: screenHight * 0.35,
    },
    coverWallpaper: {
        width: "100%",
        height: "100%"
    },
    profileRoot: {
        width: "90%",
        marginLeft: "5%",
        height: screenHight * 0.23,
        marginTop: -50,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    personal: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: "100%",
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
        fontSize: 24,
        color: primaryColor,
        fontFamily: 'serif',
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    mainRoot: {
        width: "100%",
        marginTop: 25,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20
    },
    vouchers: {
        width: "100%",
        justifyContent: "center",
        paddingLeft: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 5,
        elevation: 1
    },
    vouchersCount: {
        color: "silver",
        fontSize: 30
    },
    voucherText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    profileDetails: {
        marginTop: 25
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#F9EBEA",
        borderRadius: 10,
        padding: 5
    },
    contentHeaderText: {
        color: "grey",
        textTransform: "uppercase",
    },
    contentHeaderImage: {
        width: 20,
        height: 20
    },
    detailContainer: {
        marginTop: 15,
        padding: 5
    },
    detailBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    detailContent: {
        fontWeight: "bold",
        fontSize: 16,
    },
})