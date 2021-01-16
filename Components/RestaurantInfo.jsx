import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RestaurantInfo = (props) => {
  return (
    <View>
      <Text style={styles.container}>
        {"\n"}
        {props.phone} {"\n"}
        {props.address} {"\n"}
        {props.city} {"\n"}
        {props.rating} {"\n"}
        {props.price} {"\n"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#e6f9ff",
    width: 300,
    marginBottom: 20
  }
})

export default RestaurantInfo;
