import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
const CartTextRow = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text style={globalStyles.textProductName}>{props.title}</Text>
      <Text style={globalStyles.textProductPrice}>
        $ {props.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default CartTextRow;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});
