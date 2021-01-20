import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import GradientButton from "./GradientButton";

const CategoryListItem = (props) => {
  const navigation = useNavigation();
  const category = props.text;
  return (
    <View style={{ width: "100%", marginTop: 10 }}>
        <View style={{ marginTop: 6, alignItems: "center" }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("BusinessList", { category: category.toLowerCase() });
          }}>
            <GradientButton text={props.text} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default CategoryListItem;