import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: "row",
    height: height * 0.064,
    backgroundColor: "#f7d102",
  },
  headerOne: {
    width: "80%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: "#f3f2fd",
    borderLeftWidth: 2,
  },
  headerTwo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
