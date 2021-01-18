import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { View, Button, Text, TextInput } from "react-native";
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
import FriendList from "./Components/FriendList";

import Loading from "./Components/Loading";

const TestConnection = () => {
  const [message, setMessage] = useState("");
  async function getMsg() {
    const msg = await fetch("https://matchr.loca.lt/mobile").catch((err) => console.log(err));
    return msg;
  }

  useEffect(() => {
    const msg = getMsg();
    msg.then((res) => res.json()).then(res => setMessage(res.test));
  }, []);
  
  if(!message) {
    return <Loading />
  }

  return (
    <Text style={{marginTop: 300}}>{message}</Text>
  )
}


const Stack = createStackNavigator();

export default function App() {
  return (
    //<HomeScreen />
    //<TestConnection />
    <FriendList />
    );
}
