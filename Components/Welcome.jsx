import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import GradientButton from "./GradientButton";

const Welcome = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={{marginBottom: 30}}>
        <GradientButton text="Login" />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPress}>
        <GradientButton text="Register" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
