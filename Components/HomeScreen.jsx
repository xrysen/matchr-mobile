import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { ImageBackground, View, Image } from "react-native";
import Loading from "./Loading";
import useVisualMode from "../hooks/useVisualMode";
import Welcome from "./Welcome";
import { BusinessList } from "./BusinessList";
import { createStackNavigator } from "@react-navigation/stack";
import socketIO from "socket.io-client";
import { ENDPOINT } from "../helpers/constants";

const splashScreen = require("../assets/splashScreen.jpg");
const Stack = createStackNavigator();

const socket = socketIO(ENDPOINT, {
  transports: ["websocket"],
  jsonp: false,
});
socket.connect();
socket.on("connect", () => {
  console.log("Connected");
});

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Lobster: require("../assets/Fonts/Lobster-Regular.ttf"),
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  const { mode, transition, back } = useVisualMode("Home");

  useEffect(() => {
    socket.emit("new match session", { category: "mexican", user: "mobile_says_hi" });
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  if (mode === "Match") {
    return <BusinessList />;
  }

  return (
    <ImageBackground
      blurRadius={0.4}
      source={splashScreen}
      style={{ width: "100%", height: "99%", marginTop: 20 }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
        <Image
          source={require("../assets/matchrLogo.png")}
          style={{
            width: 200,
            height: 200,
            marginTop: 70,
            marginBottom: 150,
          }}
        />

        <Welcome onPress={() => navigation.navigate("FriendList")} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
