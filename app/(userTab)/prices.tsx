import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React from "react";
import Header from "@/components/Header";
import { FlatList } from "react-native"; 
import Price from "@/components/Price";

interface IData {
  id: string
  service: string, 
  price: number
}

const data : IData[] = [
  {
    id: "1",
    service: "Simple Trim",
    price: 12
  },
  {
    id: "2",
    service: "Eyebrows and Nose",
    price: 10
  },
  {
    id: "3",
    service: "Mullet",
    price: 15
  },
  {
    id: "4",
    service: "Full Face Wax",
    price: 19
  }
]


export default function PriceScreen() {
  return (
    <SafeAreaView style={styles.safe}>
        <Image source={require("@/assets/images/barber-line.png")} width={50} height={50}/>
        <View style={styles.mainContainer}>
            <Header textOne="Check" textTwo="our prices"/>
              <View style={styles.card}>
                <Text style={{fontFamily: "eRegular", fontSize:16,marginLeft: 30}}>Service:</Text>
                <Text style={{fontFamily: "eRegular",fontSize:16,marginRight: 30}}>Price:</Text>
              </View>
              <FlatList style={{width: "100%"}} data={data} renderItem={({item})=> <Price service={item.service} price={item.price}/>} keyExtractor={item => item.id}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: "#131316",
        flex: 1
    },
    card:{
      width: "100%",
      height: 30,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f7f7f7",
      borderRadius: 5,
      margin: 2,
      marginBottom: 5
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