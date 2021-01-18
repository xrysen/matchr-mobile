import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import FriendListItem from "./FriendListItem";

const FriendList = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

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
      name: "Shady Dude",
      image: require("../assets/Avatars/avatar2.png"),
    },
    {
      name: "Stan Lee Park",
      image: require("../assets/Avatars/avatar2.png"),
    },
  ];

  const friends = data.map((item) => {
    return (
      <FriendListItem
        key={item.name}
        userName={item.name}
        avatar={item.image}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Profile userName="Sally" question="Who are we dining with?" />
      <View style={styles.friendsList}></View>
      {friends}
      <View style={{marginTop: 100, alignItems: "center"}}>
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
