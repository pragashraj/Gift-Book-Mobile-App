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
    scrollView: {
        width: "100%",
        height: "100%",
    },
    footerRoot: {
        height: 70,
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primaryColor,
        padding: 10,
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%"
    },
    footerText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    footerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "45%"
    },
    mainRoot: {
        width: "94%",
        marginLeft: "3%",
        borderRadius: 30,
        height: "100%",
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: "#fff",
    },
    categoryBlock: {
        padding: 10,
    },
    headerTitle: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    category: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 2,
        marginVertical: 5
    },
    categoryText: {
        color: "grey",
        fontSize: 10
    },
    merchantBlock: {
        padding: 5,
        backgroundColor: "#EAECEE"
    },
    merchant: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    detailContainer: {
        marginTop: 15,
        padding: 5
    },
    detailContent: {
        fontWeight: "bold",
        fontSize: 16,
    },
    deliveryRoot: {
        padding: 10,
    },
    deliveryHeaderBlock: {
        marginTop: 15
    },
    senderBlock: {
        marginTop: 20,
        marginBottom: 10
    },
    subHeader: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1,
        fontSize: 13,
        fontWeight: "700"
    },
    RecieverBlock: {
        marginTop: 20,
        marginBottom: 10
    },
    formRoot: {
        marginTop: 10,
        padding: 5
    },
    radioSelector: {
        marginTop: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputForm: {
        marginTop: 10,
        borderTopWidth: 0.5,
    },
    input: {
        width: "100%",
        marginTop: 10
    },
    inputText: {
        color: "grey"
    },
    paymentRoot: {
        padding: 10,
    },
    infoRoot: {
        marginTop: 10,
    },
    paymentBlock: {
        marginTop: 20,
        marginBottom: 10
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
        color: "#000"
    },
    detailValue: {
        fontSize: 13,
    },
    totalText: {
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    totalValue: {
        fontSize: 22,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: primaryColor,
    },
    paymentHeaderBlock: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    headerImage: {
        width: 25,
        height: 25,
        marginRight: 15,
        marginLeft: 5
    },
    taotalValueRoot: {
        flexDirection: "row",
        alignItems: "center"
    },
    priceImage: {
        width: 35,
        height: 35
    },
    cardBlock: {
        marginTop: 20,
        marginBottom: 10
    },
    giftSelectorTopBlock: {
        padding: 10
    },
    giftItem: {
        marginVertical: 5,
    },
    invoiceHeader: {
        width: "100%",
        height: screenHight * 0.07,
        marginTop: 15
    },
    invoiceImg: {
        width: "100%",
        height: "100%"
    },
    invoiceFooter: {
        width: "100%",
        height: screenHight * 0.15,
    },
    invoiceFooterImg: {
        width: "100%",
        height: "100%"
    },
})