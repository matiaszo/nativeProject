import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React from "react";
import Header from "@/components/Header";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

interface IData {
  service: string, 
  price: number
}

const data : IData[] = [
  {
    service: "Simple Trim",
    price: 12
  },
  {
    service: "Eyebrows and Nose",
    price: 10
  },
  {
    service: "Mullet",
    price: 15
  },
  {
    service: "Full Face Wax",
    price: 19
  }
]

const renderItem = (data: IData) => {
  return (
    <View>
      
    </View>
  )
}


export default function PriceScreen() {
  return (
    <SafeAreaView style={styles.safe}>
        <Image source={require("@/assets/images/barber-line.png")} width={50} height={50}/>
        <View style={styles.mainContainer}>
            <Header textOne="Check" textTwo="our prices"/>
            <FlatList data={data} renderItem={undefined}>

            </FlatList>
        </View>
    </SafeAreaView>
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
        padding: 30
    }
});