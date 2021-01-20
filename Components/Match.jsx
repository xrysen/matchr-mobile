import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GradientButton from "./GradientButton";
import { useNavigation } from "@react-navigation/native";

const Match = (props) => {
  
  return (
    <View style={{ height: "100%", alignItems: "center", width: "100%" }}>
      <View style={styles.container}>
        <Text style={{fontFamily: "Lobster", fontSize: 58, color: "#846C9C"}}>It's a Match!</Text>
        <Text style={styles.textStyle}>{props.name}</Text>
        <Text style={styles.textStyle}>{props.phone.slice(2)}</Text>
        <Text style={styles.textStyle}>{props.address}</Text>
        <Text style={styles.textStyle}>{props.city}</Text>
        <TouchableOpacity style={{marginTop: 20}} onPress = {props.toggle}>
          <GradientButton text = "Sweet!" />
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
    borderWidth: 1
  },
  textStyle : {
    fontFamily: "Lora-Medium",
    fontSize: 20, 
    color: "white"
  }
});

export default Match;
