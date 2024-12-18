  import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    ScrollView,  // Import ScrollView
  } from "react-native";

  import { Image } from "expo-image";

  import { DatePickerModal } from 'react-native-paper-dates';

  import React, { useState, useEffect } from "react";
  import Header from "@/components/Header";
  import ScheduleCard from "@/components/ScheduleCard";
  import HeadquartersCard from "@/components/HeadquartersCard";
  import BarberCard from "@/components/BarberCard";
  import calendar from "@/assets/images/calendar3.png";

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
    { id: "1", name: "Dwight Schrute" },
    { id: "2", name: "Billy Bobby Brown"}

    
  ];

  export default function ScheduleScreen() {
    const [page, setPage] = useState(0);
    const [schedule, setSchedule] = useState<ISchedule[]>([]);
    const [date, setDate] = useState(undefined)
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirmSingle = React.useCallback(
      (params: any) => {
        setOpen(false);
        setDate(params.date);
      },
      [setOpen, setDate]
    );

    const scheduleDemo: ISchedule[] = [
      { time: "08h30", date: "18/12/2024" },
      { time: "09h30", date: "18/12/2024" },
    ];

    useEffect(() => {
      setSchedule(scheduleDemo);
      setPage(0);
    }, []);

    return (
      <View style={styles.safe}>
        <Image
          source={require("@/assets/images/barber-line.png")}
          style={{width: "100%", height: 8}}
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
                  style={{ fontFamily: "sen", fontSize: 20, color: "#FFFFFF", marginBottom: 20 }}
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
                  style={{height: 70}}
                  onPress={() => {
                    setPage(2);
                  }}
                >
                  <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
              </>
            )}

            {page === 2 && (
              <>
                <Text
                  style={{ fontFamily: "sen", fontSize: 20, color: "#FFFFFF", marginBottom: 20 }}
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
                <SafeAreaView style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20}}>
                  
                    {
                      barberList.map( (item) => {
                        return(
                          <>
                            <BarberCard key={item.id} name={item.name} />
                          </>
                        )
                      })
                    }
                  
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    setPage(3);
                  }}
                >
                  <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                </SafeAreaView>

                
              </>
            )}

            {page === 3 && (
              <>
                <Text
                  style={{ fontFamily: "sen", fontSize: 20, color: "#FFFFFF", marginBottom: 20 }}
                >
                  3. Choose your appropriate day and time
                </Text>
                <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
              />
              <TouchableOpacity
                  style={{width: "100%", backgroundColor: "#FFFFFF", borderRadius: 10, padding: 1}}
                  onPress={() => {
                    setOpen(true);
                  }}
                >
                  <Image source={calendar} style={{width: 30, height: 30, marginLeft: 5}}/>
                </TouchableOpacity>
                {/* <ScrollView contentContainerStyle={styles.barberCardWrapper}>
                  {barberList.map((item) => {
                    return (
                      <BarberCard key={item.id} name={item.name} />
                    );
                  })}
                </ScrollView> */}
                <SafeAreaView style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20}}>
                  
                    {
                      barberList.map( (item) => {
                        return(
                          <>
                            <BarberCard key={item.id} name={item.name} />
                          </>
                        )
                      })
                    }
                  
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    setPage(3);
                  }}
                >
                  <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                </SafeAreaView>

                
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
