import React from "react";
import { View, Text } from "react-native";
import SwipeFile from "./SwipeFile";
import Icons from "./Icons";
import Loading from "./Loading";
import { API_KEY_YELP } from "@env";

class BusinessList extends React.Component {
  state = {
    data: [],
    loaded: false
  };

async componentDidMount() {
  let response = await fetch(`https://api.yelp.com/v3/businesses/search?location=vancouver&categories=mexican&limit=10`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${ API_KEY_YELP }`,
          },
        });
        const json = await response.json();
        this.setState({ data: json.businesses, loaded: true });
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
          <Loading />
        </View>
      );
    }
  }

export { BusinessList };
