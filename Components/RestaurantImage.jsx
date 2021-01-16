import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RestaurantImage = (props) => {
  return (
    <View>
      <Image
        source={{ uri: `${props.image}` }}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    borderRadius: 10
  }
})

export default RestaurantImage;
