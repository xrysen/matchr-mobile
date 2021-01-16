import React from "react";
import {View, Text, StyleSheet} from "react-native";

const RestaurantName = (props) => {
  return(
    <View>
      <Text style={styles.container}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default RestaurantName;