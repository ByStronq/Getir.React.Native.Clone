import React from "react";
import { Image, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";

const Stack = createStackNavigator();

const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{
                width: 70,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name={"CategoryDetails"}
        component={CategoryFilterScreen}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Ürünler
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
