import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: 21,
    fontWeight: "700",
    color: colors.primary,
  },
  touchableContainer: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: colors.secondary,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
});
