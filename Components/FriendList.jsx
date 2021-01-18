import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import GradientButton from "./GradientButton";

const FriendList = () => {

  let [fontsLoaded] = useFonts({
    PottaOne: require("../assets/Fonts/PottaOne-Regular.ttf"),
    DidactGothic: require("../assets/Fonts/DidactGothic-Regular.ttf"),
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return(
    <View style = {styles.container}>
      <Image source={require("../assets/Avatars/avatar1.png")} style={{ marginTop: 20, marginBottom: 20, borderRadius: 10 }}/>
      <Text style={{color: "white", fontFamily: "Lora-Medium", fontSize: 20}}>Welcome, Sally!</Text>
      <View style={{ marginTop: 5, borderBottomWidth: 1, borderColor: "white",  width: "100%"}}>

      </View>
      <GradientButton text="Let's Match!" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F4124",
    alignItems: "center",
    marginTop: 30,
    height: "100%"
  }
})

export default FriendList;