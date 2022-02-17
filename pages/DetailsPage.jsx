import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import ButtonContainer from "../containers/ButtonsContainer";
import TripleButtonsContainer from "../containers/TripleButtonContainer";
import PaymentWithButton from "../components/PaymentWithButton";

const DetailsPage = ({ route, navigation }) => {
  const { title, price, image } = route.params;
  const [itemsCounter, setItemsCounter] = useState(1);
  const [newPrice, setNewPrice] = useState(price.toFixed(2));

  const [data, setData] = useState({
    price: newPrice,
    quantity: itemsCounter,
    meatTemperature: "Rare",
    cheese: "Yes",
    cheesePrice: 3.0,
    image,
    productName: title,
    productCategory: "",
  });

  useEffect(() => {
    setData((prevdata) => {
      prevdata.price = newPrice;
      prevdata.quantity = itemsCounter;
      return prevdata;
    });
  }, [newPrice, itemsCounter]);

  const decreaseItemsCounter = () => {
    if (itemsCounter === 1) {
      return;
    } else {
      setItemsCounter((prevItemsCounter) => prevItemsCounter - 1);
      setNewPrice((prev) => {
        return (+prev - price).toFixed(2);
      });
    }
  };
  const increaseItemsCounter = () => {
    setItemsCounter((prevItemsCounter) => prevItemsCounter + 1);
    setNewPrice((prev) => {
      return (+prev + price).toFixed(2);
    });
  };

  const onPressCartButton = () => {
    navigation.navigate("Cart", data);
  };
  const onPressYes = () => {
    console.log("Yes");
    setData((prevdata) => {
      prevdata.cheese = "Yes";
      prevdata.cheesePrice = 3.0;
      return prevdata;
    });
  };
  const onPressNo = () => {
    console.log("No");
    setData((prevdata) => {
      prevdata.cheese = "No";
      prevdata.cheesePrice = 0.0;
      return prevdata;
    });
  };

  const onPressRare = () => {
    setData((prevdata) => {
      prevdata.meatTemperature = "Rare";
      return prevdata;
    });
  };
  const onPressMedium = () => {
    setData((prevdata) => {
      prevdata.meatTemperature = "Medium";
      return prevdata;
    });
  };
  const onPressWellDone = () => {
    setData((prevdata) => {
      prevdata.meatTemperature = "Well Done";
      return prevdata;
    });
  };
  return (
    <View style={styles.mainContainer}>
      {/* coverImage */}
      <View style={styles.innerContainer}>
        <View style={{ width: 335 }}>
          <Image source={image} style={styles.coverImage} />
        </View>

        {/* Heading+Counter */}
        <View style={styles.counterAndTextContainer}>
          <View style={{ width: 220 }}>
            <Text style={styles.itemName}>{title}</Text>
          </View>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={decreaseItemsCounter}
              style={{ flex: 1 }}
            >
              <View>
                <Text style={styles.counterText}>-</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.counterText}>{itemsCounter}</Text>
            </View>
            <TouchableOpacity
              onPress={increaseItemsCounter}
              style={{ flex: 1 }}
            >
              <View>
                <Text style={styles.counterText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Heading */}
        <View style={{ width: 335 }}>
          <Text style={styles.optionText}>Meat temperature</Text>
        </View>
        {/* TripleButtonContainer  */}
        <View style={{ width: 335 }}>
          <TripleButtonsContainer
            Button1Title="Rare"
            onPressButton1={onPressRare}
            Button2Title="Medium"
            onPressButton2={onPressMedium}
            Button3Title="Well Done"
            onPressButton3={onPressWellDone}
          />
        </View>

        {/* Heading  */}
        <View>
          <Text style={styles.optionText}>Cheese</Text>
        </View>

        {/* DoubleButtonContainer  */}
        <View style={{ width: 335 }}>
          <ButtonContainer
            Button1Title="Yes"
            Button2Title="No"
            onPressButton1={onPressYes}
            onPressButton2={onPressNo}
          />
        </View>
      </View>

      {/* Price + Button  */}
      <View style={styles.paymentWithButtonContainer}>
        <PaymentWithButton
          title="Add to Cart"
          price={newPrice}
          onPressButton={onPressCartButton}
        />
      </View>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  innerContainer: {
    flex: 3,
    justifyContent: "space-between",
    marginTop: 10,
  },
  coverImage: {
    borderRadius: 15,
    width: 335,
  },
  itemName: {
    fontFamily: "Poppins600",
    fontSize: 21,
    fontStyle: "normal",
  },
  counterAndTextContainer: {
    flexDirection: "row",
    width: 335,
    alignItems: "center",
    justifyContent: "space-between",
  },
  counterContainer: {
    width: 100,
    height: 42,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  optionText: {
    fontFamily: "Poppins600",
    fontSize: 14,
  },
  counterText: {
    fontFamily: "Poppins400",
    fontSize: 18,
    textAlign: "center",
    color: "#828282",
  },
  paymentWithButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
