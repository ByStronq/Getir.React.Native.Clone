import React, { useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import categoriesGetir from "../../../assets/categoriesGetir";

import { Category } from "../../models";

const { height } = Dimensions.get("window");

interface CategoryBoxProps {
  item: Category;
  active: Category;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ item, active }) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
        },
        item.id === active.id && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: "600",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};

interface CategoryFilteringProps {
  category: Category;
}

const CategoryFiltering: React.FC<CategoryFilteringProps> = ({ category }) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: "100%",
        height: height * 0.065,
        backgroundColor: "#7849F7",
      }}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;
