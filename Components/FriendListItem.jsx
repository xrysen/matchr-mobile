import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { ACCENT_COLOUR } from "../helpers/constants";

import GradientButton from "./GradientButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

const FriendListItem = (props) => {
  return (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
      <Image
        source={props.avatar}
        style={{ borderRadius: 100, marginRight: 30, marginLeft: 30 }}
      />
      <View style={{ marginTop: 6 }}>
        <TouchableOpacity onPress={props.onPress}>
          <GradientButton text={props.userName} />
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faUserMinus} size={50} color={ACCENT_COLOUR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    marginLeft: 40,
    marginTop: 6,
  },
});

export default FriendListItem;
