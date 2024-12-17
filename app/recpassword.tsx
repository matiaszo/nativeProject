import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Image } from "expo-image"

const RegisterPage = () => {
  const [showInputs, setShowInputs] = useState(false);

  const handleSendEmail = () => {
    setShowInputs(true);
  };

  return (
    <>

      <View style={styles.project}>
        <View style={{display: "flex", alignItems: "center", width: "100%"}}>
          <Image source={require("@/assets/images/topLogo.png")} style={styles.image}/>
          <Text style={{fontFamily: "lobster", fontSize: 30, color: "#f8f8f8"}}>Recover your password</Text>
          <Text style={{fontFamily: "lobster", fontSize: 16, color: "#E1E1E1"}}>Insert your emai below and recieve a code</Text>
          
          <View style={styles.inputBoxes}> 
            <View style={styles.inputAndTopText}>  
              <Text style={styles.topText}>E-mail</Text> 
              <TextInput 
                style={styles.input} 
                placeholderTextColor={"#c1c1c1"} 
                placeholder="  Type your email" 
                keyboardType="email-address"
              />
              
              <View style={{display: "flex",width: "100%", justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
                  <Text style={{fontFamily: "lobster", fontSize: 20}}>Send email</Text>
                </TouchableOpacity>
              </View>
            </View>

            {showInputs && (
              <>
                <View style={styles.inputAndTopText}>
                  <Text style={styles.topText}>Code</Text> 
                  <TextInput 
                    style={styles.input} 
                    placeholderTextColor={"#c1c1c1"} 
                    placeholder="  Type the code recieved" 
                    keyboardType="default"
                  />
                  <Link href={"/recpassword"} />
                </View>
                <View style={styles.inputAndTopText}>
                  <Text style={styles.topText}>Password</Text> 
                  <TextInput 
                    style={styles.input} 
                    placeholderTextColor={"#c1c1c1"} 
                    placeholder="  Type your password" 
                    keyboardType="default"
                  />
                  <Link href={"/recpassword"} />
                </View>
                <View style={styles.inputAndTopText}>
                  <Text style={styles.topText}>Confirm password</Text> 
                  <TextInput 
                    style={styles.input} 
                    placeholderTextColor={"#c1c1c1"} 
                    placeholder="  Confirm your new password" 
                    keyboardType="default"
                  />
                  <Link href={"/recpassword"} />
                </View>
              </>
            )}
          </View>
        </View>

        <View style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link href={"/"}>
            <TouchableOpacity style={[styles.button]}>
              <Text style={{fontFamily: "lobster", fontSize: 20}}>Sign in</Text>
            </TouchableOpacity>
          </Link>

          <View style={{width: "100%"}}>
            <Link href={"/"} style={{display: "flex", flexDirection:"column"}}>
              <Text style={{color: "#f8f8f8",  fontSize: 18, opacity: 0.8}}>Already a member?</Text>
              <Text style={{color: "#f8f8f8", fontSize: 12, opacity: 0.8}}>Sign in with your account here</Text>
            </Link>
          </View>
        </View>
      </View>
    </>
  );
};

export default RegisterPage;


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

  gap: 5,
  color: "#a4a4a4"
},

topText: {

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

},
});
