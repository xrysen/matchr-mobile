import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import Icons from "./Components/Icons";
import CardDeck from "./hooks/CardDeck";
import SwipeFile from "./Components/SwipeFile";
import axios from "react-native-axios";
import { API_KEY_YELP } from "@env";
import { BusinessList } from "./Components/Test";


const photoCards = [
  {
    id: "1",
    price: "$$",
    name: "Miku",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/B7I6zFE_Ryv_0UoD5Ia2nw/o.jpg",
  },
  {
    id: "2",
    price: "$$",
    name: "Kingyo",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/WF4BFTEjqUd6B6ZEjM4_Rg/o.jpg",
  },
  {
    id: "3",
    price: "$$",
    name: "Hokkaido Ramen Santouka",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/b6KQNr3_x1ISJGLTfApcgA/o.jpg",
  },
  {
    id: "4",
    price: "$$",
    name: "Marutama Ramen",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/XZoibXxwxNwHjnFYB372vw/o.jpg",
  },
  {
    id: "5",
    price: "$$",
    name: "Guu Original Thurlow",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/yDArSNGPQStbKCBVwA2ysw/o.jpg",
  },
];

export default function App() {

  return (
    <View styles={styles.container}>
        {/* <SwipeFile cards={data}/>
        <Icons /> */ }
        <BusinessList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  
});
