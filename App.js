import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RestaurantImage from "./Components/RestaurantImage";
import RestaurantInfo from "./Components/RestaurantInfo";
import RestaurantName from "./Components/RestaurantName";
import Icons from "./Components/Icons";

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantName name = "Miku" />
      <RestaurantImage image="https://s3-media2.fl.yelpcdn.com/bphoto/B7I6zFE_Ryv_0UoD5Ia2nw/o.jpg" />
      <RestaurantInfo
        address="200 Granville Street"
        phone="604-568-3900"
        rating="4.5"
        price="$$$"
        city="Vancouver, BC"
      />
      <Icons />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
