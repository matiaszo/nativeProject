import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface IHeader {
    textOne: string, 
    textTwo: string
}

const Header = (props: IHeader) => {
    return (
        <View style={{display: "flex", flexDirection: "row", width: "100%", height: "20%"}}>
            <View style={styles.view}>
                <Text style={styles.textOne}>{props.textOne}</Text>
                <Text style={styles.textTwo}>{props.textTwo}</Text>
            </View>
            <Image source={require("@/assets/images/man1.jpg")} style={styles.img}/>
        </View>
    )
}

const styles = StyleSheet.create({

    textOne: {
        fontFamily: "lobster",
        fontSize: 32,
        color: "#FFFFFF"
    },
    textTwo: {
        fontFamily: "lobster",
        fontSize: 32,
        color: "#CECECE"
    },
    view: {
        flex: 1,
        width: "70%"
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100
    }


})

export default Header;