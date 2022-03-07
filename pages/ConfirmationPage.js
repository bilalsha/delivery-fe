import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import CustomLargeButton from "../components/CustomLargeButton";
import Card from "../components/Card";
import HeadingCard from "../components/HeadingCard";
import ImageComponent from "../components/ImageComponent";
import CartTextRow from "../components/CartTextRow";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
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
      <View style={styles.container2}>
        <Card styles={styles.card}>
          <ImageComponent
            imageContainer={globalStyles.imageContainer}
            image={image}
            imageStyle={globalStyles.imageStyle}
          />
          <View style={styles.cardTextContainer}>
            <View style={styles.textRow1}>
              <Text style={globalStyles.textProductCategory}>Entrees</Text>
            </View>
            <CartTextRow title={productName} price={+price} />
            <CartTextRow title="Cheese" price={cheesePrice} />
            <CartTextRow title={meatTemperature} price={0.0} />
          </View>
        </Card>
      </View>
      <View style={styles.container3}>
        <Text style={globalStyles.textHeadingSecondary}>Amount paid</Text>
        <Text style={globalStyles.textFinalAmount}>
          $ {totalPrice.toFixed(2)}
        </Text>
      </View>
      <View style={styles.container4}>
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
  container1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2.88%"),
  },
  container2: {
    alignItems: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container4: {
    height: hp("30%"),
    borderTopColor: "#00000014",
    borderTopWidth: 1,
  },
  cardTextContainer: {
    flex: 3,
    paddingRight: wp("2.43%"),
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

  textRow1: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  card: {
    height: hp("14.18%"),
    flexDirection: "row",
  },
});
