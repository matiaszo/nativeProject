import { SafeAreaView, Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Header from "@/components/Header";
import ScheduleCard from "@/components/ScheduleCard";

interface ISchedule {
  date: string;
  time: string;
}

export default function ScheduleScreen() {
  // Declare the schedule state inside the component
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  const scheduleDemo: ISchedule[] = [
    { time: "08h30", date: "18/12/2024" },
    { time: "09h30", date: "18/12/2024" },
  ];

  // Set the schedule state inside useEffect (optional)
  React.useEffect(() => {
    setSchedule(scheduleDemo);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <Image source={require("@/assets/images/barber-line.png")} width={50} height={50} />
      <View style={styles.mainContainer}>
        <Header textOne="Welcome," textTwo="Billy Bob" />
        <View style={{width: "90%"}}>
          {schedule.map((item) => {
            return <ScheduleCard key={item.date + item.time} date={item.date} time={item.time} />;
          })}
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
  header: {
    color: "#FFFFFF",
    fontFamily: "lobster",
    fontSize: 32,
  },
  h2: {
    color: "#FFFFFF",
    fontFamily: "eRegular",
    fontSize: 16,
    fontStyle: "italic",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
});
