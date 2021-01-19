import React from "react";
import { View, Text } from "react-native";
import CategoryListItem from "./CategoryListItem";
const categories = ["Japanese", "Chinese", "Mexican", "Italian", "Vietnamese", "Brunch", "Seafood"];

const Categories = () => {
  return(
    <CategoryListItem text = "Japanese" />
  )
}

export default Categories;