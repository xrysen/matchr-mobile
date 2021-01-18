import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import GradientButton from "./GradientButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const bgImage = { uri: "https://www.transparenttextures.com/patterns/black-paper.png" };

const FriendList = ( {navigation } ) => {
  let [fontsLoaded] = useFonts({
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ImageBackground source={bgImage} style={{width: "100%", alignItems: "center"}}>

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
      <View style={styles.friendsList}></View>
      <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
        <Image
          source={require("../assets/Avatars/avatar3.png")}
          style={{ borderRadius: 100, marginRight: 30, marginLeft: 30 }}
        />
        <View style={{ marginTop: 6 }}>
          <TouchableOpacity onPress={() => navigation.navigate("BusinessList")}>
            <GradientButton text="Ella Vader" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
        <Image
          source={require("../assets/Avatars/avatar3.png")}
          style={{ borderRadius: 100, marginRight: 30, marginLeft: 30 }}
        />
        <View style={{ marginTop: 6 }}>
          <TouchableOpacity onPress={() => navigation.navigate("BusinessList")}>
            <GradientButton text="Hedda Lettuce" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
        <Image
          source={require("../assets/Avatars/avatar2.png")}
          style={{ borderRadius: 100, marginRight: 30, marginLeft: 30 }}
        />
        <View style={{ marginTop: 6 }}>
          <TouchableOpacity onPress={() => navigation.navigate("BusinessList")}>
            <GradientButton text="Shady Dude" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
        <Image
          source={require("../assets/Avatars/avatar2.png")}
          style={{ borderRadius: 100, marginRight: 30, marginLeft: 30 }}
        />
        <View style={{ marginTop: 6 }}>
          <TouchableOpacity onPress={() => navigation.navigate("BusinessList")}>
            <GradientButton text="Hahn Guarde" />
          </TouchableOpacity>
        </View>
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
});

export default FriendList;
