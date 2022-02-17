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

const reducerFunction = (state, action) => {
  if (action.type === "INC") {
    let price = state.price + state.singleItemPrice;
    let quantity = state.quantity + 1;
    let subTotal = state.subTotal + state.singleItemPrice;
    let total = state.total + state.singleItemPrice;
    let singleItemPrice = state.singleItemPrice;

    return {
      price,
      quantity,
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

      return {
        price,
        quantity,
        subTotal,
        total,
        singleItemPrice,
      };
    }
  }
};

const CartPage = ({ route, navigation }) => {
  const onPressCartButton = () => {
    navigation.navigate("Payment", route.params);
  };
  const {
    cheese,
    image,
    meatTemperature,
    productName,
    price,
    cheesePrice,
    quantity,
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

  // setData((prevData) => {
  //   let singleItemPrice = +price / quantity;
  //   console.log(singleItemPrice);
  //   console.log(prevData.quantity);
  //   prevData.price = prevData.price + singleItemPrice;
  //   prevData.quantity = prevData.quantity + 1;
  //   prevData.subTotal = prevData.subTotal + singleItemPrice;
  //   prevData.total = prevData.total + singleItemPrice;
  //   console.log("Inside");
  //   console.log(prevData);
  //   let newData = prevData;
  //   return newData;
  // });

  return (
    <View style={{ flex: 1 }}>
      {/* Top Card  */}
      <Card styles={{ height: 200 }}>
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
          <View style={{ flex: 2, marginTop: 10, marginBottom: 10 }}>
            <CartTextRow title="Cheese" price={cheesePrice} />
            <CartTextRow title={meatTemperature} price={0.0} />
          </View>
          <View style={styles.topCardCounterContainer2}>
            <Text>Counter</Text>
            {/* <Counter
              itemsCounter={data.quantity}
              onPressPlus={increaseCheese}
              onPressMinus={decreaseCheese}
            /> */}
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
            onPressButton={onPressCartButton}
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
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topCardContainer2: {
    flex: 1,
    margin: 10,
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
    marginTop: 10,
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
