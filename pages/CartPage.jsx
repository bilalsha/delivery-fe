import { StyleSheet, Text, View, Button } from "react-native";
const CartPage = ({ navigation }) => {
  return (
    <View>
      <Text>CartPage</Text>
      <Button
        title="Payment Page"
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
};

export default CartPage;
