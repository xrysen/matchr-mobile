import React from "react";
import { View, Text } from "react-native";
import SwipeFile from "./SwipeFile";
import Icons from "./Icons";

class BusinessList extends React.Component {
  state = {
    data: [],
    loaded: false
  };

async componentDidMount() {
  let response = await fetch(`https://api.yelp.com/v3/businesses/search?location=vancouver&categories=mexican&limit=8`, {
          method: "GET",
          headers: {
            Authorization: `Bearer D1W-Ax9ipkEFeRQNCrMwmUyuVLpSxMQtBaOJC-1qtZ7iTYBcuoOtBhP6_KbWdz8eTNpmbnKKv5A-9q5sKcJfMnVvpROiJ8mmaE8dAYTiGSUjehLA4aeL-6DowKgDYHYx`,
          },
        });
        const json = await response.json();
        this.setState({ data: json.businesses, loaded: true });
}

  content() {
    return (
      <View>
      <SwipeFile cards = {photoCards} />
      </View>
    )
  }

  render() {

    if(this.state.loaded) {
      return (
      <View>
        <SwipeFile cards = {this.state.data} />
        <Icons />
      </View>
      )
    }

      return (
        <View>
          <Text style={{marginTop: 100}}>
            Loading
          </Text>
        </View>
      );
    }
  }

export { BusinessList };
