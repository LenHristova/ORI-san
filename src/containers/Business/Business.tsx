import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import { styles } from "./styles";
import { globalStyles } from "../../shared/global-styles";
import { images } from "../../../assets";
import { Text, View, Image } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { GearWheelImage } from "../GearWheelImage";

export const Business: FunctionComponent<{}> = ({}) => {
  const { window } = useDimensions();

  const academiCycleContainerSize: number = Math.min(
    window.height,
    window.width
  );
  const gearWheelSize = academiCycleContainerSize / 2.5;

  const academiCycleContainerStyle = {
    ...styles.academyCycleContainer,
    width: academiCycleContainerSize,
    height: academiCycleContainerSize,
  };

  const initialDelay = 100;
  const delayStep = 300;
  const getDelay = (order: number) => initialDelay + delayStep * order;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 30, textAlign: "center", padding: 10 }}>
          Академия за развитие на лидери
        </Text>
        <Image style={globalStyles.logo} source={images.logo}></Image>
      </View>
      <View style={academiCycleContainerStyle}>
        <GearWheelImage
          source={images.gearWheelBlue}
          size={gearWheelSize}
          direction={"right"}
          delay={getDelay(1)}
          text={"СТАРТ"}
          step={1}
        />
        <View style={styles.middleImageContainer}>
          <GearWheelImage
            source={images.gearWheelGreen}
            size={gearWheelSize}
            direction={"left"}
            delay={getDelay(2)}
            text={"ЕКИП"}
            step={4}
          />
          <GearWheelImage
            source={images.gearWheelRed}
            size={gearWheelSize}
            direction={"left"}
            delay={getDelay(2)}
            text={"ЦЕЛИ"}
            step={2}
          />
        </View>
        <GearWheelImage
          source={images.gearWheelYellow}
          size={gearWheelSize}
          direction={"right"}
          delay={getDelay(1)}
          text={"120БТ"}
          step={3}
        />
      </View>
      <Text style={{ padding: 10 }}>
        *Моля кликнете върху подходящата за Вас стъпка, за да научите повече.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
