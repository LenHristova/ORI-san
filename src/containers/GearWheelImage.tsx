import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import {
  View,
  ImageBackground,
  Text,
  Animated,
  Easing,
  ImageURISource,
  TouchableOpacity,
  Alert,
} from "react-native";

export interface IGearWheelImageProps {
  source:
    | number
    | Animated.Value
    | Animated.AnimatedInterpolation
    | Animated.WithAnimatedObject<ImageURISource>
    | Animated.WithAnimatedArray<ImageURISource>;
  size: number;
  direction: "left" | "right";
  delay: number;
  text: string;
  step: number;
}

export const GearWheelImage: FunctionComponent<IGearWheelImageProps> = (
  props: IGearWheelImageProps
) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear,
      useNativeDriver: true,
      delay: props.delay,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange:
      props.direction === "left" ? ["360deg", "0deg"] : ["0deg", "360deg"],
  });

  const textSpin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange:
      props.direction === "right" ? ["360deg", "0deg"] : ["0deg", "360deg"],
  });
  const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);
  return (
    <TouchableOpacity
      accessibilityLabel={""}
      style={{}}
      onPress={() => Alert.alert("Test")}
    >
      <AnimetedImage
        style={{
          width: props.size,
          height: props.size,
          margin: 10,
          transform: [{ rotate: spin }],
        }}
        source={props.source}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotate: textSpin }],
          }}
        >
          <Text>Стъпка {props.step}:</Text>
          <Text style={{ fontSize: 21, fontWeight: "700" }}>{props.text}</Text>
        </Animated.View>
      </AnimetedImage>
    </TouchableOpacity>
  );
};
