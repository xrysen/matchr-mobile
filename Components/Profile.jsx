import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";

const bgImage = { uri: "https://www.transparenttextures.com/patterns/black-paper.png" };

const Profile = () => {
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
          Welcome, Sally!
        </Text>
        <Text
          style={{ color: "white", fontSize: 20, fontFamily: "Lora-Medium" }}
        >
          Who are we dining with?
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
    height: 250
  },
})

export default Profile;
