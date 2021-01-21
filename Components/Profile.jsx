import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";
import { ACCENT_COLOUR } from "../helpers/constants";

const bgImage = {
  uri: "https://www.transparenttextures.com/patterns/black-paper.png",
};

const Profile = (props) => {
  return (
    <View style={styles.profile}>
      <ImageBackground
        source={bgImage}
        style={{ width: "100%", alignItems: "center", height: "100%" }}
      >
        <Image
          source={require("../assets/Avatars/avatar1.png")}
          style={{ marginTop: 20, marginBottom: 20, borderRadius: 10 }}
        />
        <Text
          style={{ color: "white", fontFamily: "Quicksand", fontSize: 20, fontWeight: "bold" }}
        >
          Welcome, {props.userName}!
        </Text>
        <Text
          style={{ color: "white", fontSize: 20, fontFamily: "Quicksand", fontWeight: "bold" }}
        >
          {props.question}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: ACCENT_COLOUR,
    width: "100%",
    alignItems: "center",
    height: 250,
  },
});

export default Profile;
