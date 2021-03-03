import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    paddingBottom: 10,
  },
  welcomeContainer: {
    flex: 1.3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
