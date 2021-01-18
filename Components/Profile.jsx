import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";

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
          style={{ color: "white", fontFamily: "Lora-Medium", fontSize: 20 }}
        >
          Welcome, {props.userName}!
        </Text>
        <Text
          style={{ color: "white", fontSize: 20, fontFamily: "Lora-Medium" }}
        >
          {props.question}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#846C9C",
    width: "100%",
    alignItems: "center",
    height: 250,
  },
});

export default Profile;
