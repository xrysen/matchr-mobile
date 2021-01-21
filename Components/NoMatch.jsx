import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoMatch = () => {
  return (
    <View style={styles.container}>
      <Text>No Match!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
})

export default NoMatch;