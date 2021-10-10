import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height

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
    mainContainer: {
        borderRadius: 50,
        marginTop: -50,
        width: "96%",
        height: "100%",
        marginHorizontal: "2%",
        padding: 5
    },
    profileRoot: {
        width: "90%",
        marginLeft: "5%",
        height: screenHight * 0.23,
        marginTop: 0,
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
        justifyContent: "center",
    },
    profilerFN: {
        fontSize: 14,
    },
    profilerLN: {
        fontSize: 24,
        color: primaryColor,
        fontFamily: 'serif',
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    voucherStatRoot: {
        padding: 8,
    },
    headerTitle: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: "bold",
        fontSize: 15
    },
    vouchers: {
        width: "100%",
        justifyContent: "center",
        paddingLeft: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 8,
        marginTop: 10,
        elevation: 5
    },
    vouchersCount: {
        color: primaryColor,
        fontSize: 30
    },
    voucherText: {
        fontSize: 16,
    },
    profileDetails: {
        marginTop: 25,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 5
    },
    contentHeaderImage: {
        width: 20,
        height: 20
    },
    detailContainer: {
        marginTop: 15,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5
    },
    detailBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    detailContent: {
        fontSize: 16,
    },
    detailValue: {
        fontWeight: "bold"
    },
    popupContainer: {
        position: "absolute",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6
    },
    headerBlock: {
        padding: 10,
    },
    footerBtn: {
        width: "80%",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    editBlock: {
        marginVertical: 10
    },
    inputRoot: {
        marginBottom: -15
    },
    info: {
        marginVertical: 10
    },
    infoText: {
        fontSize: 12
    }
})