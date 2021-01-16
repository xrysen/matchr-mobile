import React, { useRef } from "react";
import { Text, View } from "react-native";
import Card from "./Card";

const Places = [
  {
    id: "1",
    price: "$$",
    name: "Miku",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/B7I6zFE_Ryv_0UoD5Ia2nw/o.jpg",
  },
  {
    id: "2",
    price: "$$",
    name: "Sushi",
    image:
      "https://s3-media1.fl.yelpcdn.com/bphoto/WF4BFTEjqUd6B6ZEjM4_Rg/o.jpg",
  },
  {
    id: "3",
    price: "$$",
    name: "Sushi",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/b6KQNr3_x1ISJGLTfApcgA/o.jpg",
  },
  {
    id: "4",
    price: "$$",
    name: "Sushi",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/XZoibXxwxNwHjnFYB372vw/o.jpg",
  },
  {
    id: "5",
    price: "$$",
    name: "Sushi",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/yDArSNGPQStbKCBVwA2ysw/o.jpg",
  },
];

const Swipeable = () => {
  return (
    <View>
      <Card
        photo={Places[0].image}
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
