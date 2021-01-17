import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import Icons from "./Components/Icons";
import CardDeck from "./hooks/CardDeck";
import SwipeFile from "./Components/SwipeFile";
import axios from "react-native-axios";
import { API_KEY_YELP } from "@env";
import { BusinessList } from "./Components/BusinessList";
import Splashscreen from "./Components/SplashScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Loading from "./Components/Loading";
import Login from "./Components/Login";



const splashScreen = require("./assets/splashScreen.jpg");

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'PottaOne': require("./assets/Fonts/PottaOne-Regular.ttf"),
    "DidactGothic": require("./assets/Fonts/DidactGothic-Regular.ttf"),
    "Lora-Medium": require("./assets/Fonts/Lora-Medium.ttf")
  });

  if (!fontsLoaded) {
    return(
      <Loading />
    )
  }

  return (
    <ImageBackground
      blurRadius={0.4}
      source={splashScreen}
      style={{ width: "100%", height: "99%", marginTop: 20 }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
      <Image source = {require("./assets/matchrLogo.png")} style={{width: 200, height: 200, marginTop: 70, marginBottom: 150 }}/>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: "blue",
            borderRadius: 10,
            justifyContent: "center",
            alignContent: "center"
            
          }}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontFamily: "Lora-Medium" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: "blue",
            borderRadius: 10,
            justifyContent: "center",
            marginTop: 15
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontFamily: "Lora-Medium" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   // <Login />
  );
}
