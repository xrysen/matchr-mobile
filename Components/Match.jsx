import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GradientButton from "./GradientButton";
import * as WebBrowser from "expo-web-browser";

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
        <Text style={{ fontFamily: "Lobster", fontSize: 58, color: "#846C9C" }}>
          It's a Match!
        </Text>
        <TouchableOpacity onPress={openMap} style={{alignItems: "center"}}>
          <Text style={styles.textStyle}>{props.name}</Text>
          <Text style={styles.textStyle}>{props.phone.slice(2)}</Text>
          <Text style={styles.textStyle}>{props.address}</Text>
          <Text style={styles.textStyle}>{props.city}</Text>
          <Text style={styles.textStyle}>{props.rating} ⭐</Text>
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
    height: 300,
    backgroundColor: "black",
    opacity: 20,
    borderRadius: 20,
    borderColor: "#846C9C",
    borderWidth: 1,
  },
  textStyle: {
    fontFamily: "Lora-Medium",
    fontSize: 20,
    color: "white",
  },
});

export default Match;
