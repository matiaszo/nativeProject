  import {
    SafeAreaView,
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    ScrollView,  // Import ScrollView
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import Header from "@/components/Header";
  import ScheduleCard from "@/components/ScheduleCard";
  import HeadquartersCard from "@/components/HeadquartersCard";
  import BarberCard from "@/components/BarberCard";

  interface ISchedule {
    date: string;
    time: string;
  }

  const headquartersList = [
    {
      id: "1",
      name: "Cajuru",
      address: "Rua dos Alguma Coisa, 123",
      star: 5,
      image: "barber.png",
    },
    {
      id: "3",
      name: "Tarumã",
      address: "Rua Pitanga, 789",
      star: 5,
      image: "barber.png",
    },
  ];

  const barberList = [
    { id: "1", name: "Dwisssght Jhonson" },
    { id: "2", name: "John Doe" },
    { id: "3", name: "Bruce Wayne" },
    { id: "4", name: "Clark Kent" },
    { id: "5", name: "Peter Parker" },
    { id: "6", name: "Tony Stark" },
    { id: "7", name: "Steve Rogers" },
    { id: "8", name: "Natasha Romanoff" },
  ];

  export default function ScheduleScreen() {
    const [page, setPage] = useState(0);
    const [schedule, setSchedule] = useState<ISchedule[]>([]);

    const scheduleDemo: ISchedule[] = [
      { time: "08h30", date: "18/12/2024" },
      { time: "09h30", date: "18/12/2024" },
    ];

    useEffect(() => {
      setSchedule(scheduleDemo);
    }, []);

    return (
      <View style={styles.safe}>
        <Image
          source={require("@/assets/images/barber-line.png")}
          width={50}
          height={50}
        />
        <View style={styles.mainContainer}>
          <Header textOne="Welcome," textTwo="Billy Bob" />
          <View style={{ width: "90%" }}>
            {page === 0 && (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setPage(1);
                  }}
                >
                  <Text style={styles.buttonText}>Schedule an appointment</Text>
                </TouchableOpacity>
                {schedule.map((item) => (
                  <ScheduleCard
                    key={item.date + item.time}
                    date={item.date}
                    time={item.time}
                  />
                ))}
              </>
            )}
            {page === 1 && (
              <>
                <Text
                  style={{ fontFamily: "sen", fontSize: 20, color: "#FFFFFF" }}
                >
                  1. Choose your headquarters
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "#27272C",
                    padding: 8,
                    fontFamily: "sen",
                  }}
                  placeholderTextColor={"#c1c1c1"}
                  placeholder="Search for headquarters..."
                  keyboardType="default"
                />
                <FlatList
                  data={headquartersList}
                  renderItem={({ item }) => (
                    <HeadquartersCard
                      key={item.id}
                      name={item.name}
                      address={item.address}
                      star={item.star}
                      image={item.image}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.scrollContent}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setPage(2);
                  }}
                >
                  <Text style={styles.buttonText}>book</Text>
                </TouchableOpacity>
              </>
            )}
            {page === 2 && (
              <>
                <Text
                  style={{ fontFamily: "sen", fontSize: 20, color: "#FFFFFF" }}
                >
                  2. Choose your barber
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "#27272C",
                    padding: 8,
                    fontFamily: "sen",
                  }}
                  placeholderTextColor={"#c1c1c1"}
                  placeholder="Search for barber..."
                  keyboardType="default"
                />
                {/* <ScrollView contentContainerStyle={styles.barberCardWrapper}>
                  {barberList.map((item) => {
                    return (
                      <BarberCard key={item.id} name={item.name} />
                    );
                  })}
                </ScrollView> */}
                <SafeAreaView>


                <FlatList
                  data={barberList}
                  renderItem={({ item }) => (
                    <BarberCard key={item.id} name={item.name} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  style={styles.barberCardWrapper}
                />


                </SafeAreaView>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setPage(2);
                  }}
                >
                  <Text style={styles.buttonText}>Book</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    safe: {
      backgroundColor: "#131316",
      flex: 1,
    },
    button: {
      width: 210,
      height: 40,
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
    mainContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 30,
    },
    scrollContent: {
      paddingVertical: 10,
    },
    barberCardWrapper: {
  //     flexDirection: "row",
  // flexWrap: "wrap",
  // justifyContent: "space-around", // espaçar os itens
  marginBottom: 10,
  paddingBottom: 20, // Espaço extra na parte inferior
  // minHeight: 300, // Garantir altura mínima para forçar rolagem
    },
  });
