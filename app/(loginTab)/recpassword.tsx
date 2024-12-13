import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const RegisterPage = () => {
  const [showInputs, setShowInputs] = useState(false);

  const handleSendEmail = () => {
    setShowInputs(true);
  };

  return (
    <>
      <Image source={require("@/assets/images/topLogo.png")} width={100} height={100}/>

      <View style={styles.project}>
        <View style={{display: "flex", alignItems: "center", width: "100%"}}>
          <Image source={require("@/assets/images/barber-line.png")} width={100} height={100} style={{margin: 20}}/>
          <Text style={{fontFamily: "inter", fontSize: 30, color: "#f8f8f8"}}>Register a new account</Text>
          <Text style={{fontFamily: "inter", fontSize: 16, color: "#f8f8f8", marginBottom: 30}}>Insert your information and register with us</Text>
          
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
                  <Text style={{fontFamily: "inter", fontSize: 20}}>Send email</Text>
                </TouchableOpacity>
              </View>
            </View>

            {showInputs && (
              <>
                <View style={styles.inputAndTopText}>
                  <Text style={styles.topText}>E-mail</Text> 
                  <TextInput 
                    style={styles.input} 
                    placeholderTextColor={"#c1c1c1"} 
                    placeholder="  Type your email" 
                    keyboardType="default"
                  />
                  <Link href={"/(loginTab)/recpassword"} />
                </View>
                <View style={styles.inputAndTopText}>
                  <Text style={styles.topText}>Password</Text> 
                  <TextInput 
                    style={styles.input} 
                    placeholderTextColor={"#c1c1c1"} 
                    placeholder="  Type your password" 
                    keyboardType="default"
                  />
                  <Link href={"/(loginTab)/recpassword"} />
                </View>
                <View style={styles.inputAndTopText}>
                  <Text style={styles.topText}>Confirm password</Text> 
                  <TextInput 
                    style={styles.input} 
                    placeholderTextColor={"#c1c1c1"} 
                    placeholder="  Type your password" 
                    keyboardType="default"
                  />
                  <Link href={"/(loginTab)/recpassword"} />
                </View>
              </>
            )}
          </View>
        </View>

        <View style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link href={"/(loginTab)/register"}>
            <TouchableOpacity style={[styles.button, {width: "100%"}]}>
              <Text style={{fontFamily: "inter", fontSize: 20}}>Sign in</Text>
            </TouchableOpacity>
          </Link>

          <View style={{width: "100%", marginLeft: 30, marginBottom: 20}}>
            <Link href={"/(loginTab)"} style={{display: "flex", flexDirection:"column"}}>
              <Text style={{color: "#f8f8f8", marginBottom:5, fontSize: 18, opacity: 0.8}}>Already a member?</Text>
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
    marginTop: 20,
},
inputAndTopText: {
  marginTop: 15,
  gap: 5
},

topText: {
  marginLeft: 2,
  color: "#ffffff",
},
input: {
  height: 40,
  backgroundColor: "#f8f8f8",
  borderRadius: 10,
  paddingHorizontal: 5,
  paddingVertical: 15,
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
