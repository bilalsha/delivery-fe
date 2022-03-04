import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Counter = (props) => {
  return (
    <View style={styles.counterContainer1}>
      <TouchableOpacity
        onPress={props.onPressMinus}
        style={{ ...styles.minusContainer }}
      >
        <Text style={{ fontFamily: "Poppins400", color: "#828282" }}>-</Text>
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
    width: 100,
    height: 42,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  counterContainer1: {
    width: 110,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  minusContainer: {
    backgroundColor: "#F2F2F2",
    width: 22,
    height: 22,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    backgroundColor: "#EE4137",
    width: 22,
    height: 22,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Poppins400",
    fontSize: 18,
    color: "#828282",
  },
  plusText: {
    fontFamily: "Poppins400",
    color: "#FFFFFF",
  },
});
