import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
    width: wp("24%"),
    height: hp("5.10%"),
    backgroundColor: "#F2F2F2",
    borderRadius: wp("2.91%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Poppins400",
    fontSize: wp("4.37%"),
    textAlign: "center",
    color: "#828282",
  },
});
