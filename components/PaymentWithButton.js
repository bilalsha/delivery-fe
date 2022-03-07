import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles, stylesPaymentWithButton } from "../styles/globalStyles";

const PaymentWithButton = (props) => {
  return (
    <View style={stylesPaymentWithButton.container}>
      <View>
        <Text style={stylesPaymentWithButton.priceText}>
          {`$ ${props.price}`}{" "}
        </Text>
      </View>

      <TouchableOpacity onPress={props.onPressButton}>
        <View style={stylesPaymentWithButton.button}>
          <Text style={globalStyles.textButton}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentWithButton;
