import React from "react";
import { View, Text,StyleSheet } from "react-native";

const Price = ({service, price}: {service: string, price: number}) =>{
    return(
        <View style={styles.card}>
            <Text style={{fontFamily: "sen", marginLeft: 30}}>{service}</Text>
            <Text style={{fontFamily: "sen", marginRight: 40}}>${price}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        height: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        borderRadius: 5,
        margin: 5
    }
})
export default Price