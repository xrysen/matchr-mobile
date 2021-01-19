import React from "react";
import { View, TouchableOpacity } from "react-native";
import GradientButton from "./GradientButton";

const CategoryListItem = (props) => {
  return (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
        <View style={{ marginTop: 6 }}>
          <TouchableOpacity>
            <GradientButton text={props.text} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default CategoryListItem;