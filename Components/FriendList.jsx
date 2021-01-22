import React, { useRef } from "react";
import { StyleSheet, View, Animated, Button } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import FriendListItem from "./FriendListItem";
import useVisualMode from "../hooks/useVisualMode";
import Categories from "./Categories";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ACCENT_COLOUR, BACKGROUND_COLOUR } from "../helpers/constants";

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

const FriendList = ({ navigation }) => {
  const { mode, transition, back } = useVisualMode("friends");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  let [fontsLoaded] = useFonts({
    "Quicksand": require("../assets/Fonts/Quicksand.ttf"),
    "Pacifico": require("../assets/Fonts/Pacifico-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      if (mode === "friends") transition("categories");
      else {
        transition("friends");
      }
    });
  };

  const friends = data.map((item) => {
    return (
      <FriendListItem
        key={item.name}
        userName={item.name}
        avatar={item.image}
        onPress={fadeOut}
      />
    );
  });

  let question = "Who are we dining with?";
  if (mode === "friends") question = "Who are we dining with?";
  else question = "What are you in the mood for?";

  return (
    <View style={styles.container}>
      <Profile userName="Tifa" question={question} />
      <View style={styles.friendsList}></View>
      {mode === "friends" && (
        <Animated.View style={{ opacity: fadeAnim }}>
          {fadeIn()}
          {friends}
          <View style={{ marginTop: 100, alignItems: "center" }}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faUserPlus} color={ACCENT_COLOUR} size={50} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      {mode === "categories" && (
      <ScrollView contentContainerStyle={{height: 1350}}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {fadeIn()}
          <Categories onPress={fadeOut} />
        </Animated.View>
      </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: "100%",
  },
  friendsList: {
    backgroundColor: BACKGROUND_COLOUR,
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
