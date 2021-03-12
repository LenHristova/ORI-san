import React, { FunctionComponent } from "react";
import { styles } from "./styles";
import { globalStyles } from "../../shared/global-styles";
import { View, ImageBackground, Image, Text } from "react-native";
import { images } from "../../../assets/index";

export const Home: FunctionComponent<{}> = ({}) => {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.homeBackground}
      />
      <View style={styles.welcomeContainer}>
        <Image style={globalStyles.logo} source={images.logo}></Image>
        <Text style={{ fontSize: 21, fontWeight: "700" }}>АКАДЕМИЯ</Text>
        <Text style={globalStyles.titleText}>Добре дошли!</Text>
      </View>
    </>
  );
};
