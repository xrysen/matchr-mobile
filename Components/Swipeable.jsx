import React, { useRef } from "react";
import { Text, View } from "react-native";

const Swipeable = () => {
  return (
    <View>
      <Card
        
        name="Miku"
        rating="4.5"
        address="200 Granville Street"
        phone="604-568-3900"
        price = "$$"
      />
    </View>
  );
};

export default Swipeable;
