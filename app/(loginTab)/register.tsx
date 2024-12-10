import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";

export default function Register() {
  return (
    <ImageBackground source={require('@/assets/images/bg_image.png')} style={styles.container}>
      <View style={styles.project}>
        <Image source={require("@/assets/images/barberLogo.png")} width={100} height={100}/>
        <Text style={{fontFamily: "inter", fontSize: 30, color: "#f2dac2"}}>Main text</Text>
        <Text style={{fontFamily: "inter", fontSize: 20, color: "#977656"}}>Secondary text</Text>
        <View style={styles.inputBoxes}>
          <LinearGradient style={styles.gradientBoxes} start={{x: 0.1, y: 0.2}} colors={[ "#ffffff", "#ffffff"]}>
              <TextInput style={styles.input} placeholder="   👨‍🦲   Name" keyboardType="default"/>
          </LinearGradient>
        </View>
        <View style={styles.inputBoxes}>    
          <LinearGradient style={styles.gradientBoxes} start={{x: 0.1, y: 0.2}} colors={[ "#ffffff", "#ffffff"]}>
              <TextInput style={styles.input} placeholder="   👤   Email" keyboardType="email-address"/>
          </LinearGradient>
        </View>
        <View style={styles.inputBoxes}>
          <LinearGradient style={styles.gradientBoxes} start={{x: 0.1, y: 0.2}} colors={[ "#ffffff", "#ffffff"]}>
              <TextInput style={styles.input} placeholder="   🔒   Password" keyboardType="default"/>
          </LinearGradient>
        </View>
        <View style={styles.inputBoxes}>
          <LinearGradient style={styles.gradientBoxes} start={{x: 0.1, y: 0.2}} colors={[ "#ffffff", "#ffffff"]}>
              <TextInput style={styles.input} placeholder="   🔒   Confirm password" keyboardType="default"/>
          </LinearGradient>
        </View>
        <Link href={"/(loginTab)/register"}>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontFamily: "inter", fontSize: 20}}>Entrar</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
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
