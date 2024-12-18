import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React, { useState } from "react";
import Header from "@/components/Header";
import { FlatList } from "react-native"; 
import Price from "@/components/Price";
import ToastManager, { Toast } from "toastify-react-native";

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
  // Declare hooks inside the functional component
  const [page, setPage] =  useState(0);
  const [newService, setService] = useState<string | undefined>(undefined);
  const [price, setPrice] = useState<number | undefined>(undefined);

  return (
    <SafeAreaView style={styles.safe}>
      <ToastManager />
        <Image source={require("@/assets/images/barber-line.png")} width={50} height={50}/>
        <View style={styles.mainContainer}>
          <Header textOne="Check" textTwo="our prices"/>
          {page === 0 && 
            <>
              <TouchableOpacity style={styles.button2} onPress={ () => {
                    setPage(1)
                  }}>
                    <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <View style={styles.card}>
                <Text style={{fontFamily: "sen", fontSize:15,marginLeft: 30, fontWeight: "700", color: "#FFFFFF"}}>Service:</Text>
                <Text style={{fontFamily: "sen",fontSize:15,marginRight: 30, fontWeight: "700", color: "#FFFFFF"}}>Price:</Text>
              </View>
              <FlatList style={{width: "100%"}} data={data} renderItem={({item})=> <Price service={item.service} price={item.price}/>} keyExtractor={item => item.id}/>
            </>
          }
          {page === 1 && 
            <View style={{display: "flex", flexDirection: "column"}}>
                <Text
                  style={{
                    fontFamily: "sen",
                    fontSize: 15,
                    color: "#FFFFFF",
                    marginBottom: 20,
                  }}
                >
                  New Service's Name
                </Text>
                <TextInput 
                  style={{backgroundColor: "#FFFFFF", padding: 6, borderRadius: 8, color: "#252525", fontFamily: "sen"}} 
                  placeholderTextColor={"#888888"} 
                  placeholder="  Type your service name" 
                  keyboardType="default"
                  value={newService}
                  onChangeText={setService}
                />
                <Text
                  style={{
                    fontFamily: "sen",
                    fontSize: 15,
                    color: "#FFFFFF",
                    marginVertical: 20,
                  }}
                >
                  New Service's Price ($)
                </Text>
                <TextInput 
                  style={{backgroundColor: "#FFFFFF", padding: 6, borderRadius: 8, width: 250, color: "#252525", fontFamily: "sen"}} 
                  placeholderTextColor={"#888888"} 
                  placeholder="  Type its price" 
                  keyboardType="numeric"
                  value={price?.toString()}  // Convert price to string
                  onChangeText={(text) => setPrice(text ? parseFloat(text) : undefined)}  // Convert text to number
                />
                <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
                <TouchableOpacity style={styles.button3} onPress={ () => {
                      setPage(0)
                      setPrice(undefined)
                      setService(undefined)
                    }}>
                      <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                  <TouchableOpacity style={styles.button1} onPress={ () => {
                      data.push({service: newService ? newService : "", id: "15", price: price ? price : 20} )
                      setPage(0)
                      setPrice(undefined)
                      setService(undefined)
                      Toast.success("Service addedd to the database successfully!");
                    }}>
                      <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                </View>
            </View>
          }
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: "#131316",
        flex: 1
    },
    button1: {
      width: 100,
      height: 30,
      backgroundColor: "#AA0000",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginVertical: 10,
      alignSelf: "center",  
      marginTop: 50
  },
  button2: {
    width: 30,
    height: 30,
    backgroundColor: "#AA0000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
    alignSelf: "center",
    
},
button3: {
  width: 100,
  height: 30,
  backgroundColor: "#777777",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginVertical: 10,
  alignSelf: "center",
  marginTop: 50
},
    buttonText: {
      fontFamily: "sen",
      fontWeight: "500",
      fontSize: 15,
      color: "#FFFFFF",
    },
    card:{
      width: "100%",
      height: 30,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#AA0000",
      borderRadius: 5,
      
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
