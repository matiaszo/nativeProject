import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native';
import asd from "@/assets/images/barberLogo.png"


export default function HomeScreen() {
  return (
    <>
    <View style={styles.project}>
      <Image source={asd} width={100} height={100}/>
    </View>
      hey
    </>
  );
}

const styles = StyleSheet.create({
  project: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  }
});
