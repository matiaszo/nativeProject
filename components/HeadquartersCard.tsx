import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IHeadquarters {
    name: string, 
    address: string,
    star: number,
    image: string
}

const HeadquartersCard = (props: IHeadquarters) => {
    let imageSource = require(`@/assets/images/barber.png`);
    return (
        <View style={styles.cardContainer}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <View style={{width: "50%"}}>
                    <Text style={styles.headquartersName}>{props.name}</Text>
                    <Text style={styles.address}>{props.address}</Text>
                </View>
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
        width: "100%",
        backgroundColor: "#27272C",
        // padding: 10,
        borderRadius: 8,
        marginVertical: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10
    },
    headquartersName: {
        color: "#FFFFFF",
        fontFamily: "sen",
        fontSize: 18,
        fontWeight: "bold",
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
        marginRight: 10
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: "sen",
        fontSize: 14,
        fontWeight: "500",
    }
});

export default HeadquartersCard;
