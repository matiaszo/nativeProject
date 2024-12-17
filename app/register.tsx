import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React from "react";
import { Image } from "expo-image"

export default function Register() {
  return (
      <View style={styles.project}>
        <View style={{display: "flex", alignItems: "center", width: "100%"}}>
          <Image source={require("@/assets/images/topLogo.png")} style={styles.image}/>
          <Text style={{fontFamily: "lobster", fontSize: 30, color: "#f8f8f8"}}>Register a new account</Text>
          <Text style={{fontFamily: "lobster", fontSize: 16, color: "#f8f8f8"}}>Insert your information and register with us</Text>
          <View style={styles.inputBoxes}> 
            <View style={styles.inputAndTopText}>  
              <Text style={styles.topText}>Name</Text> 
              <TextInput style={styles.input} placeholderTextColor={"#c1c1c1"} placeholder="  Type your name" keyboardType="email-address"/>
            </View>
            <View style={styles.inputAndTopText}>
              <Text style={styles.topText}>E-mail</Text> 
              <TextInput style={styles.input} placeholderTextColor={"#c1c1c1"} placeholder="  Type your email" keyboardType="default"/>
              <Link href={"/recpassword"}>
              </Link>
            </View>
            <View style={styles.inputAndTopText}>
              <Text style={styles.topText}>Password</Text> 
              <TextInput style={styles.input} placeholderTextColor={"#c1c1c1"} placeholder="  Type your password" keyboardType="default"/>
              <Link href={"/recpassword"}>
              </Link>
            </View>
            <View style={styles.inputAndTopText}>
              <Text style={styles.topText}>Confirm password</Text> 
              <TextInput style={styles.input} placeholderTextColor={"#c1c1c1"} placeholder="  Type your password" keyboardType="default"/>
              <Link href={"/recpassword"}>
              </Link>
            </View>
          </View>
        </View>

        <View style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link href={"/register"}>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontFamily: "lobster", fontSize: 20}}>Sign in</Text>
            </TouchableOpacity>
          </Link>

          <View style={{width: "100%"}}>
            <Link href={"/"} style={{display: "flex", flexDirection:"column"}}>
              <Text style={{color: "#f8f8f8", fontSize: 18, opacity: 0.8, fontFamily: "lobster"}}>Already a member?</Text>
              <Text style={{color: "#f8f8f8", fontSize: 12, opacity: 0.8, fontFamily: "eRegular"}}>Sign in with your account here</Text>
            </Link>
          </View>
        </View>
      </View>
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

},
image:{
  width: "100%",
  height: 10
},
inputAndTopText: {

  gap: 5
},

topText: {

  color: "#ffffff",
   fontFamily: "eRegular"
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
},
});
