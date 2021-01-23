import React, { useRef, useState, useEffect } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import clamp from "clamp";
const { width } = Dimensions.get("screen");
import { sendAnswer, sendWsAnswer } from "../helpers/answers";
import Icons from "../Components/Icons";

const SWIPE_THRESHOLD = 0.25 * width;

export default function CardDeck(deck) {
  const navigation = useNavigation();
  let getReply = "";
  const [data, setData] = useState(deck);
  const [answer, setAnswer] = useState("");

  const animation = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  const transitionNext = function () {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }),
    ]).start(() => {
      if (data.length > 1)
        console.log(data.length - 1);
      else
        navigation.navigate("NoMatch");
      setData((data) => {
        return data.slice(1);
      });
    });
  };

  const clickYes = () => {
    //getReply = sendAnswer("Yes").then((res) => setAnswer(res));
    sendWsAnswer({ ans: "yay", user: "mobile", restaurantPhone: data[0].display_phone.slice(3), restaurant: 1});
    transitionNext();
  };

  const clickNo = () => {
    //sendAnswer("No");
    sendWsAnswer({ ans: "nay", user: "mobile", restaurantPhone: data[0].display_phone.slice(3), restaurant: 1});
    transitionNext();
  };

  const showIcons = () => {
    return <Icons onYes={clickYes} onNo={clickNo} />;
  };

  useEffect(() => {
    scale.setValue(0.9);
    opacity.setValue(1);
    animation.setValue({ x: 0, y: 0 });
  }, [data]);

  const _panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animation.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (e, { dx, dy, vx, vy }) => {
        let velocity;
        if (vx >= 0) {
          velocity = clamp(vx, 4, 5);
        } else if (vx < 0) {
          velocity = clamp(Math.abs(vx), 4, 5) * -1;
        }
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          Animated.parallel([
            Animated.decay(animation, {
              velocity: { x: velocity, y: vy },
              deceleration: 0.99,
              useNativeDriver: false,
            }),
            Animated.spring(scale, {
              toValue: 1,
              friction: 4,
              useNativeDriver: false,
            }),
          ]).start(transitionNext);
          if (velocity > 0) {
            getReply = sendAnswer("Yes").then((res) => setAnswer(res));
          } else {
            sendAnswer("No");
          }
        } else {
          Animated.spring(animation, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
  return [data, _panResponder, animation, scale, opacity, answer, showIcons];
}
