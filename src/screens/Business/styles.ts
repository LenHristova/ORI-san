import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  academyCycleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  middleImageContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", // main
    alignItems: "center", //secondary
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
