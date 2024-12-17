import { SafeAreaView, Image, StyleSheet, View, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import ScheduleCard from "@/components/ScheduleCard";
import { Link } from "expo-router";
import HeadquartersCard from "@/components/HeadquartersCard";

interface ISchedule {
  date: string;
  time: string;
}

export default function ScheduleScreen() {
  const [page, setPage] = useState(0);
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  const scheduleDemo: ISchedule[] = [
    { time: "08h30", date: "18/12/2024" },
    { time: "09h30", date: "18/12/2024" },
  ];

  useEffect(() => {
    // Here, you can replace scheduleDemo with a dynamic data fetching approach
    setSchedule(scheduleDemo);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <Image source={require("@/assets/images/barber-line.png")} width={50} height={50} />
      <View style={styles.mainContainer}>
        <Header textOne="Welcome," textTwo="Billy Bob" />
        <View style={{ width: "90%" }}>
          {page === 0 && (
            <>
              <TouchableOpacity style={styles.button} onPress={() => { setPage(1) }}>
                <Text style={styles.buttonText}>Schedule an appointment</Text>
              </TouchableOpacity>
              {schedule.map((item) => (
                <ScheduleCard key={item.date + item.time} date={item.date} time={item.time} />
              ))}
            </>
          )}
          {
            page === 1 && (
              <>
                <Text style={{ fontFamily: "sen", fontSize: 20, color: "#FFFFFF" }}>1. Choose your headquarters</Text>
                <TextInput 
                  style={{ backgroundColor: "#27272C", padding: 8, fontFamily: "sen" }} 
                  placeholderTextColor={"#c1c1c1"} 
                  placeholder="Search for headquarters..." 
                  keyboardType="default" 
                />
                <ScrollView style={{ marginVertical: 20 }}>
                  <HeadquartersCard name="Cajuru" address="Rua dos Alguma Coisa, 123" star={5} image={"barber.png"} />
                  <HeadquartersCard name="Bairro Alto" address="Rua dos Caju, 456" star={5} image={"barber.png"} />
                  <HeadquartersCard name="Tarumã" address="Rua Pitanga, 789" star={5} image={"barber.png"} />
                  {/* Add more HeadquartersCard components as needed */}
                </ScrollView>
              </>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#131316",
    flex: 1,
  },
  button: {
    width: 210,
    height: 40,  // Adjusted height for better accessibility
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginVertical: 25,
  },
  buttonText: {
    fontFamily: "sen",
    fontWeight: "500",
    fontSize: 15,
    color: "#FFFFFF",
  },
  header: {
    color: "#FFFFFF",
    fontFamily: "lobster",
    fontSize: 32,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
});
