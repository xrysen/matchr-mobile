import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ACCENT_COLOUR, BACKGROUND_COLOUR } from "../helpers/constants";

const Loading = () => {
  return (
    <View style={{ backgroundColor: BACKGROUND_COLOUR, flex: 1, justifyContent: "center", height: "100%" }}>
      <ActivityIndicator size="large" color={ACCENT_COLOUR} />
    </View>
  );
};

export default Loading;
