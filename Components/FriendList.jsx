import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import FriendListItem from "./FriendListItem";
import useVisualMode from "../hooks/useVisualMode";

const data = [
  {
    name: "Ella Vader",
    image: require("../assets/Avatars/avatar3.png"),
  },
  {
    name: "Hedda Lettuce",
    image: require("../assets/Avatars/avatar3.png"),
  },
  {
    name: "Shade E. Dude",
    image: require("../assets/Avatars/avatar2.png"),
  },
  {
    name: "Stan Lee Park",
    image: require("../assets/Avatars/avatar2.png"),
  },
];

const friends = data.map((item) => {
  return (
    <FriendListItem key={item.name} userName={item.name} avatar={item.image} />
  );
});

const FriendList = ({ navigation }) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  let [fontsLoaded] = useFonts({
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.container}>
      <Profile userName="Sally" question="Who are we dining with?" />
      <View style={styles.friendsList}></View>
      <Animated.View style={{opacity: fadeAnim}}>{fadeIn()}{friends}</Animated.View>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <FontAwesomeIcon icon={faUserPlus} color={"#846C9C"} size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#846C9C",
    width: "100%",
    alignItems: "center",
  },
  container: {
    marginTop: 30,
    height: "100%",
  },
  friendsList: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  icon: {
    marginLeft: 40,
    marginTop: 6,
  },
});

export default FriendList;
