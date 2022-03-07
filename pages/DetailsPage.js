import { Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import DoubleButtonComponent from "../components/DoubleButtonComponent";
import TripleButtonComponent from "../components/TripleButtonComponent";
import PaymentWithButton from "../components/PaymentWithButton";
import CounterDetailsPage from "../components/CounterDetailsPage.";
import { globalStyles, stylesDetailsPage } from "../styles/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DetailsPage = ({ route, navigation }) => {
  const { title, price, image } = route.params;
  const [itemsCounter, setItemsCounter] = useState(1);
  const [newPrice, setNewPrice] = useState(price.toFixed(2));

  const [data, setData] = useState({
    price: newPrice,
    quantity: itemsCounter,
    meatTemperature: "Rare",
    cheese: "Yes",
    cheeseQuantity: 1,
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
      prevdata.cheeseQuantity = 1;
      prevdata.cheesePrice = 3.0;
      return prevdata;
    });
  };
  const onPressNo = () => {
    console.log("No");
    setData((prevdata) => {
      prevdata.cheese = "No";
      prevdata.cheesePrice = 0.0;
      prevdata.cheeseQuantity = 0;
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
    <View style={globalStyles.mainContainer}>
      {/* coverImage */}
      <View style={stylesDetailsPage.innerContainer}>
        <View>
          <Image source={image} style={stylesDetailsPage.coverImage} />
        </View>

        {/* Heading+Counter */}
        <View style={stylesDetailsPage.counterAndTextContainer}>
          <View style={{ width: wp("53%") }}>
            <Text style={stylesDetailsPage.itemName}>{title}</Text>
          </View>
          <CounterDetailsPage
            onPressPlus={increaseItemsCounter}
            onPressMinus={decreaseItemsCounter}
            itemsCounter={itemsCounter}
          />
        </View>

        {/* Heading */}
        <View>
          <Text style={stylesDetailsPage.optionText}>Meat temperature</Text>
        </View>
        {/* TripleButtonContainer  */}

        <TripleButtonComponent
          Button1Title="Rare"
          onPressButton1={onPressRare}
          Button2Title="Medium"
          onPressButton2={onPressMedium}
          Button3Title="Well Done"
          onPressButton3={onPressWellDone}
        />

        {/* Heading  */}
        <View>
          <Text style={stylesDetailsPage.optionText}>Cheese</Text>
        </View>

        {/* DoubleButtonContainer  */}

        <DoubleButtonComponent
          Button1Title="Yes"
          Button2Title="No"
          onPressButton1={onPressYes}
          onPressButton2={onPressNo}
        />
      </View>

      {/* Price + Button  */}
      <View style={globalStyles.bottomButtonContainer}>
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
