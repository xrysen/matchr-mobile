import CardDeck from "../hooks/CardDeck";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Animated, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BACKGROUND_COLOUR, ENDPOINT } from "../helpers/constants";

import Modal from "react-native-modal";

import Match from "./Match";
import axios from "react-native-axios/lib/axios";

const SwipeFile = (props) => {
  const navigation = useNavigation();
  const [places, setPlaces] = 
  useState(
    {
      name: "Placeholder",
      location: {
        address1: "Placeholder",
        city: "Placeholder"
      },
      coordinates: {
        latitude: "Placeholder",
        longitude: "Placeholder"
      }
    });
  
  const [modalVisible, setModalVisible] = useState(false);
  const [data, _panResponder, animation, scale, opacity, answer] = CardDeck(
    props.cards
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const goBack = () => {
    axios.get(`${ENDPOINT}/mobile/reset`);
    navigation.navigate("FriendList");
  }

  useEffect(() => {
    if (answer === "match") {
      setPlaces(data[0]);
      setModalVisible(true);
    }
  }, [answer]);

  return (
    <View>
      <View style={{ width: 300 }}>
        <Modal
          animationIn="zoomIn"
          animationOut="zoomOut"
          transparent={true}
          isVisible={modalVisible}
          animationInTiming={500}
          animationOutTiming={500}
          backdropOpacity={0.6}
          onModalHide={() => goBack()}
        >
          <Match
            toggle={toggleModal}
            name={places.name}
            phone={places.display_phone}
            address={places.location.address1}
            city={places.location.city}
            rating={places.rating}
            price={places.price}
            long={places.coordinates.longitude}
            lat={places.coordinates.latitude}
          />
        </Modal>
      </View>

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
                  {item.name} {"\n"}
                  {item.display_phone.slice(3)}
                  {"\n"}
                  {item.location.address1}
                  {"\n"}
                  {item.location.city}
                  {"\n"}
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
    backgroundColor: BACKGROUND_COLOUR,
  },
  card: {
    paddingTop: 30,
    width: "100%",
    height: 600,
    backgroundColor: BACKGROUND_COLOUR,
    position: "absolute",

    borderWidth: 1,
    borderColor: BACKGROUND_COLOUR,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  textContainer: {
    padding: 10,
  },
  nameText: {
    fontSize: 16,
    color: "black",
  },
  addressText: {
    fontSize: 14,
    color: "#757575",
    paddingTop: 5,
  },
});

export default SwipeFile;
