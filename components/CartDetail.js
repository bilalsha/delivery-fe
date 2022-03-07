import { Text, View } from "react-native";
import { globalStyles, stylesCartDetials } from "../styles/globalStyles";
const CartDetail = (props) => {
  return (
    <View style={stylesCartDetials.textContainer}>
      <Text style={globalStyles.textProductCategory}>Entrees</Text>
      <Text style={globalStyles.textProductName}>{props.productName}</Text>
      <Text style={globalStyles.textProductPrice}>
        $ {props.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default CartDetail;
