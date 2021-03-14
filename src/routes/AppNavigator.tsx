import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Business } from "../screens/Business/Business";
import { Home } from "../screens/Home/Home";
import { colors } from "../shared/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { BusinessUnit } from "../screens/BusinessUnit/BusinessUnit";
import { View, ImageBackground, Image, Text } from "react-native";
type RootStackParamList = {
  Home: undefined;
  Business: undefined;
};

export type BusinessUnitStackParamList = {
  HomeNavigator: undefined;
  BusinessUnit: { title: string };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export const AppNavigator: FunctionComponent<{}> = ({}) => {
  const HomeNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Business") {
            iconName = focused ? "ios-business" : "ios-business-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.default,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Начало" }} />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{ title: "Бизнес" }}
      />
    </Tab.Navigator>
  );

  const Stack = createStackNavigator<BusinessUnitStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusinessUnit"
          component={BusinessUnit}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
