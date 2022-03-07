import { Text, View } from "react-native";
import { globalStyles, stylesCartTextRow } from "../styles/globalStyles";
const CartTextRow = (props) => {
  return (
    <View style={stylesCartTextRow.textContainer}>
      <Text style={globalStyles.textProductName}>{props.title}</Text>
      <Text style={globalStyles.textProductPrice}>
        $ {props.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default CartTextRow;
