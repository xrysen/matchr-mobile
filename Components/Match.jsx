import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GradientButton from "./GradientButton";
import * as WebBrowser from "expo-web-browser";
import { ACCENT_COLOUR, BACKGROUND_COLOUR } from "../helpers/constants";

const Match = (props) => {
  const openMap = () => {
    console.log("Opening");
    WebBrowser.openBrowserAsync(
      `https://maps.google.com/?q=${props.address},${props.city}`
    );
  };

  return (
    <View style={{ height: "100%", alignItems: "center", width: "100%" }}>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Pacifico", fontSize: 58, color: ACCENT_COLOUR }}>
          It's a Match!
        </Text>

        <Text style={styles.textStyle}>{props.name}</Text>
        <Text style={styles.textStyle}>{props.phone.slice(2)}</Text>
        <Text style={styles.textStyle}>{props.address}</Text>
        <Text style={styles.textStyle}>{props.city}</Text>
        <Text style={styles.textStyle}>{props.rating} ⭐</Text>

        <TouchableOpacity style={{ marginTop: 10 }} onPress={openMap}>
          <GradientButton text="Map" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }} onPress={props.toggle}>
          <GradientButton text="Sweet!" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
    width: 400,
    height: 380,
    backgroundColor: BACKGROUND_COLOUR,
    opacity: 20,
    borderRadius: 20,
    borderColor: ACCENT_COLOUR,
    borderWidth: 1,
  },
  textStyle: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});

export default Match;
