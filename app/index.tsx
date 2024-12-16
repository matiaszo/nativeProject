import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <>
      <Image source={require("@/assets/images/topLogo.png")} width={100} height={100}/>

      <View style={styles.project}>
        <View style={{display: "flex", alignItems: "center", width: "100%"}}>
          <Image source={require("@/assets/images/topLogo.png")} width={100} height={100} style={{margin: 20}}/>
          <Text style={{fontFamily: "lobster", fontSize: 30, color: "#f8f8f8"}}>Login on your account</Text>
          <Text style={{fontFamily: "lobster", fontSize: 16, color: "#f8f8f8", marginBottom: 30}}>Insert your login credentials here</Text>
          <View style={styles.inputBoxes}> 
            <View style={styles.inputAndTopText}>  
              <Text style={styles.topText}>E-mail</Text> 
              <TextInput style={styles.input} placeholderTextColor={"#c1c1c1"} placeholder="  Type your email" keyboardType="email-address"/>
            </View>
            <View style={styles.inputAndTopText}>
              <Text style={styles.topText}>Password</Text> 
              <TextInput style={styles.input} placeholderTextColor={"#c1c1c1"} placeholder="  Type your password" keyboardType="default"/>
              <Link href={"/recpassword"}>
                <Text style={[styles.topText, {opacity: 0.8}]}>Forgot your password? Rescue it here</Text> 
              </Link>
            </View>
          </View>
        </View>

        <View style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link href={"/(userTab)/home"}>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontFamily: "lobster", fontSize: 20}}>Sign in</Text>
            </TouchableOpacity>
          </Link>

          <View style={{width: "100%", marginLeft: 30, marginBottom: 20}}>
            <Link href={"/register"} style={{display: "flex", flexDirection:"column"}}>
              <Text style={{color: "#f8f8f8", marginBottom:5, fontSize: 18, opacity: 0.8, fontFamily: "lobster"}}>New around here?</Text>
              <Text style={{color: "#f8f8f8", fontSize: 12, opacity: 0.8, fontFamily: "eRegular"}}>Register with us here</Text>
            </Link>
          </View>
        </View>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  project: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "#000000"
  },
  inputBoxes: {
    width: "90%",
    display:"flex",
    justifyContent: "center",
    marginTop: 20,
},
inputAndTopText: {
  marginTop: 15,
  gap: 5
},

topText: {
  marginLeft: 2,
  color: "#ffffff",
  fontFamily: "eSemibold"
},
input: {
  height: 40,
  backgroundColor: "#f8f8f8",
  borderRadius: 10,
  paddingHorizontal: 5,
  paddingVertical: 15,
  fontFamily: "eRegular"
},
button: {
  width: 110,
  height: 30,
  backgroundColor: "#f8f8f8",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  padding: 5,
  marginVertical: 25,
},
});
