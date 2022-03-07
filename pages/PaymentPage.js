import { Text, View } from "react-native";
import DoubleButtonComponent from "../components/DoubleButtonComponent";
import Circle from "../components/Circle";
import { useEffect } from "react";
import CustomLargeButton from "../components/CustomLargeButton";
import { globalStyles, stylesPaymentPage } from "../styles/globalStyles";

const PaymentPage = ({ route, navigation }) => {
  const onPressNextButton = () => {
    navigation.navigate("Confirmation", route.params);
  };
  useEffect(() => {
    console.log("payment Page");
    console.log(route.params);
  }, []);
  const onPressPayNow = () => {
    console.log("PayNow");
  };
  const onPressChargeMemberBalance = () => {
    console.log("Charge Member Balance");
  };

  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.locationIcon}>
        <Circle />
      </View>
      <View style={stylesPaymentPage.textContainer}>
        <Text style={globalStyles.textHeading}>
          Would you like to charge this to your member balance? Or pay now via
          credit card?
        </Text>
      </View>
      <View style={stylesPaymentPage.doubleButtonContiner}>
        <DoubleButtonComponent
          Button1Title="Pay Now"
          Button2Title="Charge Member Balance"
          onPressButton1={onPressPayNow}
          onPressButton2={onPressChargeMemberBalance}
        />
      </View>

      <View style={globalStyles.bottomButtonContainer}>
        <CustomLargeButton title="Next" onPressButton={onPressNextButton} />
      </View>
    </View>
  );
};

export default PaymentPage;
