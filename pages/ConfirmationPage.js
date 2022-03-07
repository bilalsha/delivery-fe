import { Text, View } from "react-native";
import { globalStyles, stylesConfirmationPage } from "../styles/globalStyles";
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
      <View style={stylesConfirmationPage.container1}>
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
      <View style={stylesConfirmationPage.container2}>
        <Card styles={stylesConfirmationPage.card}>
          <ImageComponent
            imageContainer={globalStyles.imageContainer}
            image={image}
            imageStyle={globalStyles.imageStyle}
          />
          <View style={stylesConfirmationPage.cardTextContainer}>
            <View style={stylesConfirmationPage.textRow1}>
              <Text style={globalStyles.textProductCategory}>Entrees</Text>
            </View>
            <CartTextRow title={productName} price={+price} />
            <CartTextRow title="Cheese" price={cheesePrice} />
            <CartTextRow title={meatTemperature} price={0.0} />
          </View>
        </Card>
      </View>
      <View style={stylesConfirmationPage.container3}>
        <Text style={globalStyles.textHeadingSecondary}>Amount paid</Text>
        <Text style={globalStyles.textFinalAmount}>
          $ {totalPrice.toFixed(2)}
        </Text>
      </View>
      <View style={stylesConfirmationPage.container4}>
        <View style={stylesConfirmationPage.bottomCardText}>
          <Text style={globalStyles.textProductPrice}>Your order number</Text>
          <Text style={globalStyles.textOrderNumber}>1553</Text>
        </View>
        <View style={globalStyles.bottomButtonContainer}>
          <CustomLargeButton title="Done" />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationPage;
