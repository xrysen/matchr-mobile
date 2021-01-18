import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Text, StyleSheet} from "react-native";

const GradientButton = (props) => {
  return (
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.buttonSize}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  buttonSize: {
    justifyContent: "center",
    borderRadius: 5,
    width: 100,
    height: 50,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Lora-Medium",
    color: "white",
    fontSize: 20
  }
});

export default GradientButton;