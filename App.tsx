import React from "react";
import { fonts } from "./assets/fonts";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/shared/colors";
import { AppNavigator } from "./src/routes/AppNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({ Comfortaa: fonts.comfortaaRegular });

  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return <ActivityIndicator size="small" color={colors.default} />;
  }
}
