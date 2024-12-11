import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <Text>oi</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  project: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  inputBoxes: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
},
gradientBoxes: {
  width: 350,
  borderRadius: 10
},
input: {
  paddingHorizontal: 5,
  paddingVertical: 15,
  opacity: 0.8
},
button: {
  backgroundColor: "#49A840FF",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  padding: 5,
  marginVertical: 25,
  height: 35
},
});
