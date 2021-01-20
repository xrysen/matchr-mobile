import React, { useState, useRef, useEffect } from "react";
import { View, Button, Text, TextInput } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Components/HomeScreen";
import FriendList from "./Components/FriendList";
import Loading from "./Components/Loading";
import BusinessList from "./Components/BusinessList";
import Match from "./Components/Match";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="FriendList" component={FriendList} />
        <Stack.Screen name="BusinessList" component={BusinessList} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
