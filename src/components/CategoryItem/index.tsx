import React from "react";

import { TouchableOpacity, Image, Text, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Category } from "../../models";

const { width } = Dimensions.get("window");

type CategoryItemProps = {
  item: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails", { category: item })}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: "column",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={{
          uri: item.src,
        }}
        style={{
          width: width * 0.18,
          height: width * 0.18,
          borderRadius: 8,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: "#616161",
          fontWeight: "500",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
