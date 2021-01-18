import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Text, StyleSheet} from "react-native";

const GradientButton = (props) => {
  return (
    <LinearGradient colors={['#846C9C', '#9921E8']} style={styles.buttonSize}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  buttonSize: {
    justifyContent: "center",
    borderRadius: 5,
    width: 200,
    height: 50,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Lora-Medium",
    color: "white",
    textShadowColor: "black",
    fontSize: 20
  }
});

export default GradientButton;