import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Animated, PanResponder, Text, Platform, Dimensions, Image } from "react-native";
import Icons from "./Components/Icons";
import CardDeck from "./hooks/CardDeck";
import SwipeFile from "./Components/SwipeFile";


export default function App() {

  return (
    <View styles={styles.container}>
        <SwipeFile />
        <Icons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  
});
