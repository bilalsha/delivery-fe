import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import ButtonContainer from "../Components/ButtonsContainer";
import CustomButton from "../Components/CustomButton";
import TripleButtonsContainer from "../Components/TripleButtonContainer";
import PaymentWithButton from "../Components/PaymentWithButton";
const DetailsPage = ({ navigation }) => {
  const [itemsCounter, setItemsCounter] = useState(1);

  const decreaseItemsCounter = () => {
    if (itemsCounter === 1) {
      return;
    } else {
      setItemsCounter((prevItemsCounter) => prevItemsCounter - 1);
    }
  };
  const increaseItemsCounter = () => {
    setItemsCounter((prevItemsCounter) => prevItemsCounter + 1);
  };
  const onPressCartButton = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.container}>
      {/* coverImage */}
      <View
        style={{
          flex: 3,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ width: 335 }}>
          <Image
            source={require("../assets/images/detailsPage/details.png")}
            style={styles.coverImage}
          />
        </View>

        {/* Heading+Counter */}
        <View style={styles.counterContainer}>
          <View style={{ width: 220 }}>
            <Text style={styles.itemName}>Extra Beef burger with cheese</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 42,
              backgroundColor: "#F2F2F2",
              borderRadius: 12,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decreaseItemsCounter}>
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.counterText}>{itemsCounter}</Text>
            </View>
            <TouchableOpacity onPress={increaseItemsCounter}>
              <Text style={styles.counterText}>+</Text>
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
            Button2Title="Medium"
            Button3Title="Well Done"
          />
        </View>

        {/* Heading  */}
        <View>
          <Text style={styles.optionText}>Cheese</Text>
        </View>

        {/* DoubleButtonContainer  */}
        <View style={{ width: 335 }}>
          <ButtonContainer Button1Title="Yes" Button2Title="No" />
        </View>
      </View>

      {/* Price + Button  */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <PaymentWithButton
          title="Add to Cart"
          price="$ 12.90"
          onPressButton={onPressCartButton}
        />
      </View>
      {/* <Button title="Cart Page" onPress={() => navigation.navigate("Cart")} /> */}
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  coverImage: {
    borderRadius: 15,
  },
  itemName: {
    fontFamily: "Poppins600",
    fontSize: 21,
    fontStyle: "normal",
  },
  counterContainer: {
    flexDirection: "row",
    width: 335,
    alignItems: "center",
    justifyContent: "space-between",
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
});
