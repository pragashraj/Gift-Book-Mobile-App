import { StyleSheet } from 'react-native'

import {primaryColor} from '../../values/values'

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
    mainRoot: {
        padding: 10
    },
    filterBlock: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    headerTitle: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: "bold",
        fontSize: 12
    },
    filterItemRoot: {
        marginTop: 20
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    date: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        padding: 5,
        width: "45%",
        justifyContent: "center"
    },
    dateText:{
        textTransform: "uppercase",
        marginRight: 5
    },
    calendarImg: {
        width: 30,
        height: 30
    },
    selectedDateRoot: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    selectedDate: {
        width: "85%",
        marginLeft: "5%",
    },
    clearBtnRoot: {
        width: "10%",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 22,
        height: 22
    },
    listBlock: {
        borderRadius: 10,
        marginTop: 10
    },
    list: {
        marginTop: 20,
        alignItems: "center",
    },
    PaymentCard: {
        flex: 1,
        width: "100%",
        height: "100%",
        elevation: 5,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 15,
        padding: 15,
        minHeight: 170
    },
    cardBackground: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        borderRadius: 20
    },
    card: {
        width: "100%",
        height: "100%"
    },
    cardFooter: {
        width: "100%",
        height: 40,
        padding: 0,
        backgroundColor: "#F9EBEA",
        justifyContent: "center",
        padding: 5
    },
    cardContent: {
        textTransform: "uppercase",
        fontSize: 12,
        letterSpacing: 1,
        fontWeight: "bold"
    },
    cardValue: {
        fontWeight: "bold"
    },
    iconRoot: {
        marginVertical: 5,
    },
    moreIconRoot: {
        flexDirection: "row"
    },
    moreText: {
        marginRight: 5,
        color: primaryColor,
        fontWeight: "bold"
    },
    moreIcon: {
        width: 22,
        height: 22,
        backgroundColor: "#F9EBEA",
        borderRadius: 20,
        padding: 12
    }
})