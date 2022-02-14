import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
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
    width: 335,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: 217,
    height: 50,
    alignItems: "center",
    backgroundColor: "#EE4137",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  priceText: {
    fontFamily: "Poppins500",
    fontSize: 24,
    color: "#333333",
  },
});
