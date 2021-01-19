import CardDeck from "../hooks/CardDeck";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Animated, PanResponder, Text, Platform, Dimensions, Image } from "react-native";
import { getRestaurantIdsWithFilter, createRestaurantProfile, buildRestaurants } from "../helpers/yelp";

const SwipeFile = (props) => {
  const [places, setPlaces] = useState([]);
  const [data, _panResponder, animation, scale, opacity] = CardDeck(props.cards);

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
                  source={{ uri: `${item.image_url}` }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>
                  {item.name} {'\n'}
                  {item.display_phone.slice(3)}{'\n'}
                  {item.location.address1}{'\n'}
                  {item.location.city}{'\n'}
                  {item.rating} ⭐ {item.price}
                  </Text>
              </View>
            </Animated.View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  card: {
    paddingTop: 30,
    width: '100%',
    height: 600,
    backgroundColor: 'black',
    position: 'absolute',
    
    borderWidth: 1,
    borderColor: 'black',
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  textContainer: {
    padding: 10
  },
  nameText: {
    fontSize: 16,
    color: "white"
  },
  addressText: {
    fontSize: 14,
    color: '#757575',
    paddingTop: 5
  }
})

export default SwipeFile;
