import CardDeck from "../hooks/CardDeck";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Animated, PanResponder, Text, Platform, Dimensions, Image } from "react-native";
import { getRestaurantIdsWithFilter } from "../helpers/yelp";

const test = getRestaurantIdsWithFilter("mexican");

test.then(res => console.log(res));

const photoCards = [
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
    name: "Kingyo",
    image:
      "https://s3-media1.fl.yelpcdn.com/bphoto/WF4BFTEjqUd6B6ZEjM4_Rg/o.jpg",
  },
  {
    id: "3",
    price: "$$",
    name: "Hokkaido Ramen Santouka",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/b6KQNr3_x1ISJGLTfApcgA/o.jpg",
  },
  {
    id: "4",
    price: "$$",
    name: "Marutama Ramen",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/XZoibXxwxNwHjnFYB372vw/o.jpg",
  },
  {
    id: "5",
    price: "$$",
    name: "Guu Original Thurlow",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/yDArSNGPQStbKCBVwA2ysw/o.jpg",
  },
];

const SwipeFile = () => {
  const [data, _panResponder, animation, scale, opacity] = CardDeck(photoCards);
  return (
    <View>
      {data
        .slice(0, 2)
        .reverse()
        .map((item, index, items) => {
          const isLastItem = index === items.length - 1;
          const panHandlers = isLastItem
            ? { ..._panResponder.panHandlers }
            : {};
          const isSecondToLast = index === items.length - 2;
          const rotate = animation.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ["-30deg", "0deg", "30deg"],
            extrapolate: "clamp",
          });

          const animatedCardStyles = {
            transform: [{ rotate }, ...animation.getTranslateTransform()],
            opacity,
          };

          const cardStyle = isLastItem ? animatedCardStyles : undefined;
          const nextStyle = isSecondToLast
            ? { transform: [{ scale: scale }], borderRadius: 5 }
            : undefined;

          return (
            <Animated.View
              {...panHandlers}
              style={[styles.card, cardStyle, nextStyle]}
              key={item.id}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: `${item.image}` }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
            </Animated.View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 600,
    backgroundColor: '#f4f4f4',
    position: 'absolute',
    borderRadius: 10,
    ...Platform.select({
      android: {
        elevation: 1
      },
    }),
    borderWidth: 1,
    borderColor: '#FFF',
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    padding: 10
  },
  nameText: {
    fontSize: 16,
  },
  addressText: {
    fontSize: 14,
    color: '#757575',
    paddingTop: 5
  }
})

export default SwipeFile;
