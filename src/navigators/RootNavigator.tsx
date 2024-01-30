import React from "react";
import { TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";

import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RootNavigator: React.FC = () => {
  const CustomTabBarButton: React.FC = () => (
    <TouchableOpacity
      style={{
        width: 58,
        height: 58,
        backgroundColor: "#5c3ebc",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 33,
        marginTop: -8,
        borderWidth: 3,
        borderColor: "#fff",
      }}
    >
      <Entypo name={"list"} size={32} color={"#ffd00c"} />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5c3ebc",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name={"home"} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Search"}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"search"} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"List"}
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name={"User"}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"user"} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Gift"}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={"gift"} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
