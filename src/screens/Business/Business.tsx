import React, { FunctionComponent } from "react";
import { styles } from "./styles";
import { globalStyles } from "../../shared/global-styles";
import { images } from "../../../assets";
import { Text, View, Image } from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { GearWheelButton } from "../../components/GearWheelButton/GearWheelButton";
import { colors } from "../../shared/colors";

export const Business: FunctionComponent<{}> = ({}) => {
  const { window } = useDimensions();

  const academiCycleContainerSize: number = Math.min(
    window.height,
    window.width
  );

  const gearWheelSize = academiCycleContainerSize * 0.43;

  const academiCycleContainerStyle = {
    ...styles.academyCycleContainer,
    width: academiCycleContainerSize,
    height: academiCycleContainerSize,
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={globalStyles.titleText}>
          Академия за развитие на лидери
        </Text>
        <Image style={globalStyles.logo} source={images.logo}></Image>
      </View>
      <View style={academiCycleContainerStyle}>
        <GearWheelButton
          size={gearWheelSize}
          direction={"right"}
          text={"СТАРТ"}
          step={1}
        />
        <View style={styles.middleImageContainer}>
          <GearWheelButton
            size={gearWheelSize}
            direction={"left"}
            text={"ЕКИП"}
            step={4}
          />
          <GearWheelButton
            size={gearWheelSize}
            direction={"left"}
            text={"ЦЕЛИ"}
            step={2}
            rotate={48}
          />
        </View>
        <GearWheelButton
          size={gearWheelSize}
          direction={"right"}
          text={"120БТ"}
          step={3}
          rotate={48}
        />
      </View>
    </View>
  );
};
