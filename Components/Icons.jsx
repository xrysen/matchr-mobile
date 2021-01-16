import React from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimesCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Icons = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={()=> alert("Nope!")}
      >
        <FontAwesomeIcon icon={faTimesCircle} size={50} color={"red"} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={()=> alert("Yep!")}
        >
          <FontAwesomeIcon icon={faHeart} size={50} color={"green"}  />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    width: "100%",
    height: 300,
    backgroundColor:'#e6f9ff',
    position: "absolute",
    top: 600,
  }
})

export default Icons;
