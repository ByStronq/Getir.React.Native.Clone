import React, { useState } from "react";
import { ScrollView } from "react-native";

import CategoryFiltering from "../../components/CategoryFiltering";

import { Category } from "../../models";

const CategoryFilterScreen: React.FC = (props) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category,
  );

  return (
    <ScrollView>
      <CategoryFiltering category={category} />
    </ScrollView>
  );
};

export default CategoryFilterScreen;
