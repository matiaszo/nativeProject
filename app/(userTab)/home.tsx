import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from "react-native"
import React, { useState } from "react";

import Header from "@/components/Header";
import logo from "@/assets/images/logo.png"

export default function HomeScreen() {
  return (
    <>
    <SafeAreaView style={styles.safe}>
        <Image source={require("@/assets/images/barber-line.png")} width={50} height={50}/>
        <View style={styles.mainContainer}>
            <Header textOne="Welcome," textTwo="Billy Bob"/>
            <Image source={logo} width={50} height={50}/>
            <Text style={{fontFamily: "sen",color: "#ffffff", fontSize: 24,marginTop: 55, textAlign: "center"}}>St Paul was created at 12/9/2024 by Matias and Kauane.
                We provide different services at a fair price, always looking to embrace and appreciate our costumers and his needs
            </Text>
        </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: "#131316",
        flex: 1
    },
    header: {
        color: "#FFFFFF",
        fontFamily: "lobster",
        fontSize: 32
    },
    h2: {
        color: "#FFFFFF",
        fontFamily: "eRegular",
        fontSize: 16,
        fontStyle: "italic"
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        padding: 30,
    }
});
