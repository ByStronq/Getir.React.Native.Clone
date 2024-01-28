import React from "react";
import { View, Text, Image } from "react-native";

import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

const HeaderMain: React.FC = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.getir.com/misc/emoji/house.png",
          }}
        />

        <View style={styles.headerOneView}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Ev
          </Text>

          <Text
            style={{
              fontWeight: "500",
              fontSize: 11.5,
              color: "#6e7480",
              marginLeft: 6,
              marginRight: 1,
            }}
          >
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>

          <Entypo name={"chevron-right"} size={22} color={"#5d3ebd"} />
        </View>
      </View>

      <View style={styles.headerTwo}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "bold",
            color: "#5d3ebd",
          }}
        >
          TVS
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#5d3ebd",
          }}
        >
          13
          <Text
            style={{
              fontSize: 16,
            }}
          >
            dk
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default HeaderMain;
