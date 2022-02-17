import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
const CartDetail = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text style={globalStyles.textProductCategory}>Entrees</Text>
      <Text style={globalStyles.textProductName}>{props.productName}</Text>
      <Text style={globalStyles.textProductPrice}>
        $ {props.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default CartDetail;

const styles = StyleSheet.create({
  textContainer: {
    flex: 2,
    justifyContent: "center",
  },
});
