import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SwipeFile from "./SwipeFile";
import Icons from "./Icons";
import Loading from "./Loading";
import { API_KEY_YELP } from "@env";

const BusinessList = ({route, navigation}) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { category } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`https://api.yelp.com/v3/businesses/search?location=vancouver&categories=${category}&limit=10`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${ API_KEY_YELP }`,
          },
        });
        const json = await response.json();
        setData(json.businesses);
        setLoaded(true);
    }
    fetchData();
  },[]);

  if (loaded) {
    return (
      <View>
        <SwipeFile cards = {data} />
        <Icons />
      </View>
    )
  }

  return (
    <View style={{backgroundColor: "black", height: "100%"}}>
      <Loading />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
})

export default BusinessList;