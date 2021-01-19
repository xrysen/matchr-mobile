import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryListItem from "./CategoryListItem";
import GradientButton from "./GradientButton";
const categories = [
  { name: "Japanese" },
  { name: "Chinese" },
  { name: "Mexican" },
  { name: "Italian" },
  { name: "Vietnamese" },
];

const Categories = (props) => {
  const cats = categories.map((cats) => {
    return <CategoryListItem key={cats.name} text={cats.name} />;
  });

  return (
    <View style={{ alignItems: "center" }}>
      {cats}
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity onPress={props.onPress}>
          <GradientButton text="Back" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
