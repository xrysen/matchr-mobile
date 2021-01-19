import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import GradientButton from "./GradientButton";

const CategoryListItem = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", marginTop: 30 }}>
        <View style={{ marginTop: 6, alignItems: "center" }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("BusinessList", { category: "mexican" });
          }}>
            <GradientButton text={props.text} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default CategoryListItem;