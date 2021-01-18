import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import GradientButton from "./GradientButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const FriendList = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Profile />
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

      <View style={{ alignItems: "center", marginTop: 90 }}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faUserPlus} size={50} color={"#846C9C"} />
        </TouchableOpacity>
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
