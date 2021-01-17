import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
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



const splashScreen = require("./assets/splashScreen.jpg");

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'PottaOne': require("./assets/Fonts/PottaOne-Regular.ttf"),
    "DidactGothic": require("./assets/Fonts/DidactGothic-Regular.ttf")
  });

  if (!fontsLoaded) {
    return(
      <Loading />
    )
  }

  return (
    <ImageBackground
      blurRadius={0.5}
      source={splashScreen}
      style={{ width: "100%", height: "99%", marginTop: 20 }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: "90%" }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: "blue",
            borderRadius: 10,
            justifyContent: "center",
            
          }}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontFamily: "DidactGothic" }}>
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
          <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontFamily: "DidactGothic" }}>
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
          component={BusinessList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
