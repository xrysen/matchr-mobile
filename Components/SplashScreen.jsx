import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = () => {

  return (
    <View style={styles.container}>
      
      <Text>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1, 
    justifyContent: 'center'
  }
})

export default SplashScreen;