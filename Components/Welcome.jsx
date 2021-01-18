import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import GradientButton from "./GradientButton";
import { useNavigation } from "@react-navigation/native";
import { BusinessList } from "./BusinessList";

const Welcome = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={{marginBottom: 30}}>
        <GradientButton text="Tap To Start" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
