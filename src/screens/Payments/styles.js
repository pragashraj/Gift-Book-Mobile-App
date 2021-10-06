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
        width: 25,
        height: 25
    },
    listBlock: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    list: {
        marginTop: 20,
        alignItems: "center",
    },
})