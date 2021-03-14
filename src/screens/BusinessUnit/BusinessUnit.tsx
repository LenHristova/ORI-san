import React, { useState, useRef, FunctionComponent } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Player } from "../../components/Player/Player";

interface IBusinessUnitProps {
  navigation: StackNavigationProp<any, any>;
  route: { params: { title: string } };
}
const DATA = [
  {
    id: "84WIaK3bl_s",
    title: "Първи стъпки",
  },
  {
    id: "iMCM1NceGJY",
    title: "Срещи сббдхцйдбс йцдсб цдйфбж йжфд жфбхджфд бжфдй",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
export const BusinessUnit: FunctionComponent<IBusinessUnitProps> = ({
  route,
  navigation,
}: IBusinessUnitProps) => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <Player id={item.id} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
});
