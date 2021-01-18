import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { View, Button, Text } from "react-native";
import Icons from "./Components/Icons";
import CardDeck from "./hooks/CardDeck";
import SwipeFile from "./Components/SwipeFile";
import axios from "react-native-axios";
import { API_KEY_YELP } from "@env";
import { BusinessList } from "./Components/BusinessList";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Components/HomeScreen";

import Login from "./Components/Login";
import useVisualMode from "./hooks/useVisualMode";
import Welcome from "./Components/Welcome";

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
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Details"
    //       component={Login}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Login />
    <HomeScreen />
  );
}
