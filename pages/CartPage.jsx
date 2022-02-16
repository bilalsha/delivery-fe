import { StyleSheet, Text, View } from "react-native";
import PaymentWithButton from "../components/PaymentWithButton";
import { globalStyles } from "../styles/globalStyles";
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
          <Text style={globalStyles.textHeadingSecondary}>Sub total</Text>
          <Text style={globalStyles.textHeadingSecondary}>$ 12.80</Text>
        </View>
        <View
          style={{
            ...styles.bottomCardBorderStyle,
            ...styles.bottomCardTextContainer,
          }}
        >
          <Text style={globalStyles.textHeadingSecondary}>Tax</Text>
          <Text style={globalStyles.textHeadingSecondary}>$3.00</Text>
        </View>
        <View style={styles.bottomCardTextContainer}>
          <Text style={globalStyles.textHeadingSecondary}>Total</Text>
          <Text style={globalStyles.textHeadingSecondary}>$15.80</Text>
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
    borderTopWidth: 1,
  },
  bottomCardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  bottomCardBorderStyle: {
    borderBottomColor: "#BDBDBD",
    borderStyle: "dotted",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  paymentWithButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
