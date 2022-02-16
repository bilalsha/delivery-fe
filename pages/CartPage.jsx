import { StyleSheet, Text, View, Button } from "react-native";
import PaymentWithButton from "../Components/PaymentWithButton";
const CartPage = ({ navigation }) => {
  const onPressCartButton = () => {
    navigation.navigate("Confirmation");
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.card}></View>
      <View style={{ flex: 1 }}></View>
      <View style={styles.bottomCard}>
        <View style={styles.bottomCardTextContainer}>
          <Text>Sub total</Text>
          <Text>$ 12.80</Text>
        </View>
        <View
          style={{
            borderBottomColor: "#BDBDBD",
            borderStyle: "dotted",
            borderBottomWidth: 1,
            paddingBottom: 10,
            ...styles.bottomCardTextContainer,
          }}
        >
          <Text>Tax</Text>
          <Text>$3.00</Text>
        </View>
        <View style={styles.bottomCardTextContainer}>
          <Text>Total</Text>
          <Text>$15.80</Text>
        </View>
        <View style={styles.paymentWithButtonContainer}>
          <PaymentWithButton
            title="Select Payment"
            price="15.80"
            onPressButton={onPressCartButton}
          />
        </View>
      </View>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 15,
    borderRadius: 15,
    // shadowColor: "#00000014",
    borderWidth: 1,
    // overflow: "hidden",
    // shadowRadius: 20,
    // shadowOpacity: 2,
    borderColor: "#00000012",
  },
  bottomCard: {
    flex: 1.5,
    borderTopColor: "#00000014",
    borderWidth: 1,
  },
  bottomCardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  paymentWithButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
