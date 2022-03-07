import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const PaymentWithButton = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.priceText}>{`$ ${props.price}`} </Text>
      </View>

      <TouchableOpacity onPress={props.onPressButton}>
        <View style={styles.button}>
          <Text style={globalStyles.textButton}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentWithButton;

const styles = StyleSheet.create({
  container: {
    width: wp("81%"),
    height: hp("6.10%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: wp("52%"),
    height: hp("6.10%"),
    alignItems: "center",
    backgroundColor: "#EE4137",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: wp("3.64%"),
  },
  priceText: {
    fontFamily: "Poppins500",
    fontSize: wp("5.83%"),
    color: "#333333",
  },
});
