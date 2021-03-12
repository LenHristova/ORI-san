import React, { FunctionComponent } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { GearWheelSvg } from "../GearWheelSvg/GearWheelSvg";
import { colors } from "../../shared/colors";
import { IGearWheelImageProps as IGearWheelButtonProps } from "./IGearWheelButtonProps";

export const GearWheelButton: FunctionComponent<IGearWheelButtonProps> = (
  props: IGearWheelButtonProps
) => {
  const touchableSize = props.size * 0.7;
  const spinValue = new Animated.Value(0);
  const outputRange =
    props.direction === "left" ? ["360deg", "0deg"] : ["0deg", "360deg"];
  const spin = spinValue.interpolate({ inputRange: [0, 1], outputRange });
  const AnimatedGearWheelSvg = Animated.createAnimatedComponent(GearWheelSvg);
  const animatedTiming = Animated.timing(spinValue, {
    toValue: 1,
    duration: 15000,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  Animated.loop(animatedTiming).start();

  return (
    <View
      style={{
        width: props.size,
        height: props.size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedGearWheelSvg
        size={props.size}
        color={colors.blue}
        rotate={props.rotate}
        style={{ transform: [{ rotate: spin }], opacity: 0.9 }}
      />
      <TouchableOpacity
        accessibilityLabel={`Стартирай стъпка ${props.step}`}
        style={{
          width: touchableSize,
          height: touchableSize,
          borderRadius: touchableSize,
          ...styles.touchableContainer,
        }}
        onPress={() => Alert.alert("Test")}
      >
        <Entypo name="controller-play" size={38} color={colors.primary} />
        <Text style={{ color: colors.primary }}>Стъпка {props.step}:</Text>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
