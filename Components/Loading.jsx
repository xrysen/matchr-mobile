import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

const Loading = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#846C9C" />
    </View>
  );
};

export default Loading;
