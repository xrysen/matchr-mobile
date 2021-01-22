import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import { ACCENT_COLOUR, PACIFICO } from "../helpers/constants";
import GradientButton from "./GradientButton";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";

const NoMatch = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    "Quicksand": require("../assets/Fonts/Quicksand.ttf"),
    "Pacifico": require("../assets/Fonts/Pacifico-Regular.ttf")
  });

  if (!fontsLoaded) {
    <Loading />
  }

  const openSearch = () => {
    WebBrowser.openBrowserAsync(
      "http://www.google.com/search?q=relationship+counsellors+near+me"
    );
  }

  return (
    <View style={styles.container}>
      <Image source = {require("../assets/matchrLogo.png")} />
      <Text style={styles.textStyle}>No Matches Found Yet!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("FriendList")}>
        <GradientButton text="Keep Matching" />
      </TouchableOpacity>
      <Text style={{fontFamily: "Quicksand", fontWeight: "bold", fontSize: 30, color: ACCENT_COLOUR, marginTop: 10, marginBottom: 10}}>Or Consider</Text>
      <TouchableOpacity onPress={openSearch}>
        <GradientButton text="Relationship Counselling" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  textStyle: {
    fontFamily: PACIFICO,
    fontSize: 50,
    color: ACCENT_COLOUR,
    textAlign: "center",
    marginBottom: 10
  }
})

export default NoMatch;