import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  academyCycleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#f7d9d9",
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
