import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import CustomLargeButton from "../components/CustomLargeButton";
import Card from "../components/Card";
import HeadingCard from "../components/HeadingCard";
import ImageComponent from "../components/ImageComponent";
import CartTextRow from "../components/CartTextRow";
const ConfirmationPage = ({ route, navigation }) => {
  const {
    productName,
    cheesePrice,
    meatTemperature,
    totalPrice,
    image,
    price,
  } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container1}>
        <HeadingCard
          text="Thank you for your order!"
          headingStyle={globalStyles.textHeading}
          color="#4F4F4F"
        />
        <HeadingCard
          text="We will have it ready for you soon! Check your email for your
          receipt."
          headingStyle={globalStyles.textHeadingSecondary}
          color="#828282"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Card styles={styles.Card}>
          <ImageComponent
            imageContainer={globalStyles.imageContainer}
            image={image}
            imageStyle={globalStyles.imageStyle}
          />
          <View style={{ flex: 3, paddingRight: 10 }}>
            <View style={styles.textRow1}>
              <Text style={globalStyles.textProductCategory}>Entrees</Text>
            </View>
            <CartTextRow title={productName} price={+price} />
            <CartTextRow title="Cheese" price={cheesePrice} />
            <CartTextRow title={meatTemperature} price={0.0} />
          </View>
        </Card>
      </View>
      <View style={styles.totalAmountCard}>
        <Text style={globalStyles.textHeadingSecondary}>Amount paid</Text>
        <Text style={globalStyles.textFinalAmount}>
          $ {totalPrice.toFixed(2)}
        </Text>
      </View>
      <View style={styles.bottomCard}>
        <View style={styles.bottomCardText}>
          <Text style={globalStyles.textProductPrice}>Your order number</Text>
          <Text style={globalStyles.textOrderNumber}>1553</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomLargeButton title="Done" />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationPage;

const styles = StyleSheet.create({
  topCard: {
    // margin: 15,
    width: 335,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00000012",
  },

  bottomCard: {
    height: 250,
    borderTopColor: "#00000014",
    borderTopWidth: 1,
  },
  bottomCardText: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textRow1: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Card: {
    height: 118,
    flexDirection: "row",
  },
  totalAmountCard: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
