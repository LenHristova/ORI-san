import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Business } from "../screens/Business/Business";
import { Home } from "../screens/Home/Home";
import { colors } from "../shared/colors";

type RootStackParamList = {
  Home: undefined;
  Business: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export const AppNavigator: FunctionComponent<{}> = ({}) => {
  const HomeNavigator = () => (
    <Navigator
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
      <Screen name="Home" component={Home} options={{ title: "Начало" }} />
      <Screen
        name="Business"
        component={Business}
        options={{ title: "Бизнес" }}
      />
    </Navigator>
  );

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
