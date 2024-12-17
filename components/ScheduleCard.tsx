import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IHeader {
    date: string, 
    time: string
}

const ScheduleCard = (props: IHeader) => {
    return (
        <View style={{flex: 1, flexDirection: "column", width: "100%", backgroundColor: "#FFFFFF", padding: 10, borderRadius: 8, marginVertical: 15}}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", margin: 5}}>
                <Image source={require("@/assets/images/calendar2.png")} style={{width: 17, height: 17, marginRight: 10}}/>
                <Text style={styles.text}>{props.date}</Text>
            </View>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", margin: 5}}>
                <Image source={require("@/assets/images/clock.png")} style={{width: 17, height: 17, marginRight: 10}}/>
                <Text style={styles.text}>{props.time}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontFamily: "sen", fontSize: 15, color: '#FFFFFF'}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontFamily: "sen",
        fontSize: 18,
        color: "#000000",
        alignItems: "center"
    },
    button: {
        width: 110,
        height: 30,
        backgroundColor: "#AA0000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        color: "#FFFFFF",
        alignSelf: "flex-end"
    }


})

export default ScheduleCard;