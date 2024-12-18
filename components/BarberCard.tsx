import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IBarber {
    name: string
}

const BarberCard = (props: IBarber) => {
    let imageSource = require(`@/assets/images/man2.jpg`);
    return (
        <View style={styles.cardContainer}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                    <Text style={styles.headquartersName}>{props.name}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "45%",
        maxHeight: 260,
        // backgroundColor: "#27272C",
        backgroundColor: "#27272C",
        // padding: 10,
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8
    },
    headquartersName: {
        color: "#FFFFFF",
        fontFamily: "sen",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    address: {
        color: "#FFFFFF",
        fontFamily: "sen",
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: "#AA0000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: "sen",
        fontSize: 14,
        fontWeight: "500",
    }
});

export default BarberCard;
