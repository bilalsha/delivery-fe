import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CounterDetailsPage = (props) => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity onPress={props.onPressMinus} style={{ flex: 1 }}>
        <View>
          <Text style={styles.counterText}>-</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.counterText}>{props.itemsCounter}</Text>
      </View>
      <TouchableOpacity onPress={props.onPressPlus} style={{ flex: 1 }}>
        <View>
          <Text style={styles.counterText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterDetailsPage;

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
  counterText: {
    fontFamily: "Poppins400",
    fontSize: 18,
    textAlign: "center",
    color: "#828282",
  },
});
