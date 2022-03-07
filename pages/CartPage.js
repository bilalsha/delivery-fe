import { StyleSheet, Text, View } from "react-native";
import PaymentWithButton from "../components/PaymentWithButton";
import { useState, useEffect, useReducer } from "react";
import TextRow from "../components/TextRow";
import Card from "../components/Card";
import ImageComponent from "../components/ImageComponent";
import CartDetail from "../components/CartDetail";
import { globalStyles } from "../styles/globalStyles";
import CartTextRow from "../components/CartTextRow";
import Counter from "../components/Counter";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const reducerFunction = (state, action) => {
  if (action.type === "INC") {
    let price = state.price + state.singleItemPrice;
    let quantity = state.quantity + 1;
    let subTotal = state.subTotal + state.singleItemPrice;
    let total = state.total + state.singleItemPrice;
    let cheesePrice = state.cheesePrice;
    let cheeseQuantity = state.cheeseQuantity;
    let singleItemPrice = state.singleItemPrice;

    return {
      price,
      quantity,
      cheesePrice,
      cheeseQuantity,
      subTotal,
      total,
      singleItemPrice,
    };
  }
  if (action.type === "DEC") {
    if (state.quantity === 1) {
      return state;
    } else {
      let price = state.price - state.singleItemPrice;
      let quantity = state.quantity - 1;
      let subTotal = state.subTotal - state.singleItemPrice;
      let total = state.total - state.singleItemPrice;
      let singleItemPrice = state.singleItemPrice;
      let cheesePrice = state.cheesePrice;
      let cheeseQuantity = state.cheeseQuantity;

      return {
        price,
        quantity,
        subTotal,
        total,
        singleItemPrice,
        cheesePrice,
        cheeseQuantity,
      };
    }
  }
  if (action.type === "INC_CHEESE") {
    let price = state.price;
    let quantity = state.quantity;
    let cheesePrice = state.cheesePrice + 3;
    let cheeseQuantity = state.cheeseQuantity + 1;
    let subTotal = state.subTotal + 3;
    let total = state.total + 3;
    let singleItemPrice = state.singleItemPrice;

    return {
      price,
      quantity,
      cheesePrice,
      cheeseQuantity,
      subTotal,
      total,
      singleItemPrice,
    };
  }
  if (action.type === "DEC_CHEESE") {
    if (state.cheeseQuantity === 0) {
      return state;
    } else {
      let price = state.price;
      let quantity = state.quantity;
      let cheesePrice = state.cheesePrice - 3;
      let cheeseQuantity = state.cheeseQuantity - 1;
      let subTotal = state.subTotal - 3;
      let total = state.total - 3;
      let singleItemPrice = state.singleItemPrice;

      return {
        price,
        quantity,
        subTotal,
        total,
        singleItemPrice,
        cheesePrice,
        cheeseQuantity,
      };
    }
  }
};

const CartPage = ({ route, navigation }) => {
  const onPressPaymentButton = () => {
    navigation.navigate("Payment", route.params);
  };
  const {
    image,
    meatTemperature,
    productName,
    quantity,
    price,
    cheesePrice,
    cheeseQuantity,
  } = route.params;
  let tax = 3.0;
  let subTotal = +price + cheesePrice;
  let total = subTotal + tax;
  let singleItemPrice = +price / quantity;
  // const [data, setData] = useState({
  //   price: +price,
  //   quantity,
  //   subTotal,
  //   total,
  // });
  const [data, dispatchData] = useReducer(reducerFunction, {
    price: +price,
    quantity,
    subTotal,
    cheesePrice,
    cheeseQuantity,
    total,
    singleItemPrice,
  });

  useEffect(() => {
    console.log(route.params);

    console.log(total);
    route.params.price = data.price;
    route.params.quantity = data.quantity;
    route.params.subTotal = data.subTotalb;
    route.params.totalPrice = data.total;
    route.params.cheesePrice = data.cheesePrice;
    route.params.cheeseQuantity = data.cheeseQuantity;

    console.log(route.params);
  }, [data]);

  const decreaseItemsCounter = () => {
    dispatchData({
      type: "DEC",
    });
  };
  const increaseItemsCounter = () => {
    dispatchData({
      type: "INC",
    });
  };

  const increaseCheese = () => {
    dispatchData({
      type: "INC_CHEESE",
    });
  };
  const decreaseCheese = () => {
    dispatchData({
      type: "DEC_CHEESE",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Top Card  */}
      <Card styles={{ height: heightPercentageToDP("24%") }}>
        <View style={styles.topCardContainer1}>
          <ImageComponent
            imageContainer={globalStyles.imageContainer}
            image={image}
            imageStyle={globalStyles.imageStyle}
          />
          <CartDetail productName={productName} price={data.price} />
          <View style={styles.topCardCounterContainer}>
            <Counter
              itemsCounter={data.quantity}
              onPressPlus={increaseItemsCounter}
              onPressMinus={decreaseItemsCounter}
            />
          </View>
        </View>
        <View style={styles.topCardContainer2}>
          <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}></View>
          <View
            style={{
              flex: 2,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <CartTextRow title="Cheese" price={data.cheesePrice} />
            <CartTextRow title={meatTemperature} price={0.0} />
          </View>
          <View style={styles.topCardCounterContainer2}>
            {/* <Text>Counter</Text> */}
            <Counter
              itemsCounter={data.cheeseQuantity}
              onPressPlus={increaseCheese}
              onPressMinus={decreaseCheese}
            />
          </View>
        </View>
      </Card>
      <View style={{ flex: 1 }}></View>
      {/* Bottom Card  */}
      <View style={styles.bottomCard}>
        <TextRow
          title="Sub total"
          price={`$ ${data.subTotal.toFixed(2)}`}
          customStyle={{}}
        />
        <TextRow
          title="Tax"
          price={`$ ${tax.toFixed(2)}`}
          customStyle={styles.bottomCardBorderStyle}
        />
        <TextRow
          title="Total"
          price={`$ ${data.total.toFixed(2)}`}
          customStyle={{}}
        />

        <View style={styles.paymentWithButtonContainer}>
          <PaymentWithButton
            title="Select Payment"
            price={data.total.toFixed(2)}
            onPressButton={onPressPaymentButton}
          />
        </View>
      </View>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  topCardContainer1: {
    flex: 1,
    margin: heightPercentageToDP("1.20%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topCardContainer2: {
    flex: 1,
    margin: heightPercentageToDP("1.20%"),
    flexDirection: "row",
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
    marginTop: 6,
  },

  bottomCard: {
    height: heightPercentageToDP("30%"),
    borderTopColor: "#00000014",
    borderTopWidth: 1,
  },
  bottomCardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: heightPercentageToDP("2.40%"),
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
    marginBottom: 5,
  },
});
