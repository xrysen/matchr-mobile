import React from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimesCircle, faHeart } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert("Nope!")}
      >
        <FontAwesomeIcon icon={faTimesCircle} size={50} color={"red"} />
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert("Yep!")}
        >
          <FontAwesomeIcon icon={faHeart} size={50} color={"green"}  />
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    width: "100%",
    height: "100%",
    backgroundColor:'#e6f9ff'
  }
})

export default Icons;
