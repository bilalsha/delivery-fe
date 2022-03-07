import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Counter = (props) => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        onPress={props.onPressMinus}
        style={{ ...styles.minusContainer }}
      >
        <Text style={styles.minusText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterText}>{props.itemsCounter}</Text>

      <TouchableOpacity
        onPress={props.onPressPlus}
        style={{ ...styles.plusContainer }}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    width: widthPercentageToDP("25.90%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  minusContainer: {
    backgroundColor: "#F2F2F2",
    width: widthPercentageToDP("5.35%"),
    height: widthPercentageToDP("5.35%"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    backgroundColor: "#EE4137",
    width: widthPercentageToDP("5.35%"),
    height: widthPercentageToDP("5.35%"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Poppins400",
    fontSize: widthPercentageToDP("4.37%"),
    color: "#828282",
  },
  plusText: {
    fontFamily: "Poppins400",
    color: "#FFFFFF",
  },
  minusText: { fontFamily: "Poppins400", color: "#828282" },
});
