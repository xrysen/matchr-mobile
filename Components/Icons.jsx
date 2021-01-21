import React from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimesCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BACKGROUND_COLOUR } from "../helpers/constants";

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
    paddingTop: 700,
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: BACKGROUND_COLOUR,
    zIndex: -1
  }
})

export default Icons;
