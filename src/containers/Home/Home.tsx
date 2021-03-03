import React, { FunctionComponent } from "react";
import { styles } from "./styles";
import { globalStyles } from "../../shared/global-styles";
import {
  View,
  ImageBackground,
  Image,
  Text,
  Alert,
  GestureResponderEvent,
} from "react-native";

import { images } from "../../../assets/index";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";

export interface IHomeProps {
  onClickBusiness: ((event: GestureResponderEvent) => void) | undefined;
}

export const Home: FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.homeBackground}
      />
      <View style={styles.welcomeContainer}>
        <Image style={globalStyles.logo} source={images.logo}></Image>
        <Text style={styles.title}>АКАДЕМИЯ</Text>
        <Text style={styles.title}>Добре дошли!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <DefaultButton
          accessibilityLabel={"Към Бизнес Академията"}
          text={"БИЗНЕС"}
          onPress={props.onClickBusiness}
        />
      </View>
    </>
  );
};
