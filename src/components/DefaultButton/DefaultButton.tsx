import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";

export interface IDefaultButtonProps {
  text: string;
  accessibilityLabel: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
export const DefaultButton: FunctionComponent<IDefaultButtonProps> = (
  props: IDefaultButtonProps
) => {
  return (
    <TouchableOpacity
      accessibilityLabel={props.accessibilityLabel}
      style={{ backgroundColor: "purple", width: "50%", borderRadius: 3 }}
      onPress={props.onPress}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 14,
          fontWeight: "700",
          padding: 15,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
