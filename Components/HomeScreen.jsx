import React from "react";
import { useFonts } from "expo-font";
import { ImageBackground, View, Image } from "react-native";
import Loading from "./Loading";
import useVisualMode from "../hooks/useVisualMode"
import Welcome from "./Welcome";
import Login from "./Login";


const splashScreen = require("../assets/splashScreen.jpg");

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    PottaOne: require("../assets/Fonts/PottaOne-Regular.ttf"),
    DidactGothic: require("../assets/Fonts/DidactGothic-Regular.ttf"),
    "Lora-Medium": require("../assets/Fonts/Lora-Medium.ttf"),
  });

  const { mode, transition, back } = useVisualMode("Home");

  if (!fontsLoaded) {
    return <Loading />;
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
          {mode === "Home" && ( <Welcome onPress={() => transition("Login")}/> )}
          {mode === "Login" && ( <Login onBack={back}/>) }
        </View>
      </ImageBackground>
    );
};

export default HomeScreen;