import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SwipeFile from "./SwipeFile";
import Loading from "./Loading";
import { API_KEY_YELP } from "@env";
import { BACKGROUND_COLOUR, ENDPOINT } from "../helpers/constants";
import socketIO from "socket.io-client";

const socket = socketIO(ENDPOINT, {
  transports: ["websocket"],
  jsonp: false,
});

const BusinessList = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { category } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        `https://api.yelp.com/v3/businesses/search?location=vancouver&categories=${category}&limit=10`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY_YELP}`,
          },
        }
      );
      const json = await response.json();
      setData(json.businesses);
      setLoaded(true);
    };
    fetchData();
    socket.emit("new match session", { category: category, user: "sue@mango.com" });
  }, []);

  if (loaded) {
    return (
      <View>
        <SwipeFile cards={data} />
      </View>
    );
  }

  return (
    <View style={{ height: "100%" }}>
      <Loading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOUR,
  },
});

export default BusinessList;
