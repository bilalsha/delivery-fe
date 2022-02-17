import { StyleSheet, Text, View, Image } from "react-native";
import PaymentWithButton from "../components/PaymentWithButton";
import { useEffect } from "react";
import TextRow from "../components/TextRow";
import { globalStyles } from "../styles/globalStyles";
const CartPage = ({ route, navigation }) => {
  const onPressCartButton = () => {
    navigation.navigate("Payment", route.params);
  };
  const { cheese, image, meatTemperature, productName, price, cheesePrice } =
    route.params;

  let subTotal = +price + cheesePrice;
  let tax = 3.0;
  let total = subTotal + tax;
  useEffect(() => {
    console.log(route.params);

    console.log(total);
    route.params.totalPrice = total;
    console.log(route.params);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {/* Top Card  */}
      <View style={styles.topCard}>
        <View style={styles.topCardContainer1}>
          <View style={styles.topCardImageContainer}>
            <Image source={image} style={styles.imageStyle} />
          </View>
          <View style={styles.topCardTextContainer}>
            <Text style={globalStyles.textProductCategory}>Entrees</Text>
            <Text style={globalStyles.textProductName}>{productName}</Text>
            <Text style={globalStyles.textProductPrice}>
              $ {route.params.price}
            </Text>
          </View>
          <View style={styles.topCardCounterContainer}>
            <Text>Counter</Text>
          </View>
        </View>
        <View style={styles.topCardContainer2}>
          <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}></View>
          <View style={{ flex: 2, marginTop: 10, marginBottom: 10 }}>
            <View style={styles.topCardTextContainer2}>
              <Text style={globalStyles.textProductName}>Cheese</Text>
              <Text style={globalStyles.textProductPrice}>
                $ {route.params.cheesePrice.toFixed(2)}
              </Text>
            </View>
            <View style={styles.topCardTextContainer2}>
              <Text style={globalStyles.textProductName}>
                {meatTemperature}
              </Text>
              <Text style={globalStyles.textProductPrice}>$ 0.00</Text>
            </View>
          </View>
          <View style={styles.topCardCounterContainer2}>
            <Text>Counter</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={styles.bottomCard}>
        <TextRow
          title="Sub total"
          price={`$ ${subTotal.toFixed(2)}`}
          customStyle={{}}
        />
        <TextRow
          title="Tax"
          price={`$ ${tax.toFixed(2)}`}
          customStyle={styles.bottomCardBorderStyle}
        />
        <TextRow
          title="Total"
          price={`$ ${total.toFixed(2)}`}
          customStyle={{}}
        />

        <View style={styles.paymentWithButtonContainer}>
          <PaymentWithButton
            title="Select Payment"
            price={total.toFixed(2)}
            onPressButton={onPressCartButton}
          />
        </View>
      </View>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  topCard: {
    margin: 15,
    borderRadius: 15,
    height: 200,
    // shadowColor: "#00000014",
    borderWidth: 1,
    // overflow: "hidden",
    // shadowRadius: 20,
    // shadowOpacity: 2,
    borderColor: "#00000012",
  },
  topCardContainer1: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topCardContainer2: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
  },
  topCardImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
  },
  topCardTextContainer: {
    flex: 2,
    justifyContent: "center",
  },
  topCardTextContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topCardCounterContainer: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topCardCounterContainer2: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1.5,
    marginTop: 10,
  },
  imageStyle: {
    height: 65,
    width: 60,
    borderRadius: 12,
  },

  bottomCard: {
    height: 250,
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
  bottomCardNone: {},
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
