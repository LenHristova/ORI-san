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

interface Unit {
  order: string;
  title: string;
}

const businesUnits: {
  start: Unit;
  aims: Unit;
  BT: Unit;
  team: Unit;
} = {
  start: { order: "Стъпка 1", title: "СТАРТ" },
  aims: { order: "Стъпка 2", title: "ЦЕЛИ" },
  BT: { order: "Стъпка 3", title: "120БТ" },
  team: { order: "Стъпка 4", title: "ЕКИП" },
};

export const Business: FunctionComponent<{ navigation: any }> = ({
  navigation,
}) => {
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

  const openBusinesUnit = (unit: Unit) => {
    /* 1. Navigate to the BusinessUnit route with params */
    navigation.navigate("BusinessUnit", {
      title: `${unit.order}: ${unit.title}`,
    });
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
          unit={businesUnits.start.order}
          uniteTitle={businesUnits.start.title}
          onPress={() => openBusinesUnit(businesUnits.start)}
        />
        <View style={styles.middleImageContainer}>
          <GearWheelButton
            size={gearWheelSize}
            direction={"left"}
            unit={businesUnits.team.order}
            uniteTitle={businesUnits.team.title}
            onPress={() => openBusinesUnit(businesUnits.team)}
          />
          <GearWheelButton
            size={gearWheelSize}
            direction={"left"}
            unit={businesUnits.aims.order}
            uniteTitle={businesUnits.aims.title}
            onPress={() => openBusinesUnit(businesUnits.aims)}
            rotate={48}
          />
        </View>
        <GearWheelButton
          size={gearWheelSize}
          direction={"right"}
          unit={businesUnits.BT.order}
          uniteTitle={businesUnits.BT.title}
          onPress={() => openBusinesUnit(businesUnits.BT)}
          rotate={48}
        />
      </View>
    </View>
  );
};
