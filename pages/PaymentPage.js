import { StyleSheet, Text, View, Button } from "react-native";
import DoubleButtonComponent from "../components/DoubleButtonComponent";
import Circle from "../components/Circle";
import { useEffect } from "react";
import CustomLargeButton from "../components/CustomLargeButton";
import { globalStyles } from "../styles/globalStyles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
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
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={globalStyles.locationIcon}>
          <Circle />
        </View>
        <View style={styles.textContainer}>
          <Text style={globalStyles.textHeading}>
            Would you like to charge this to your member balance? Or pay now via
            credit card?
          </Text>
        </View>
        <View style={styles.doubleButtonContiner}>
          <DoubleButtonComponent
            Button1Title="Pay Now"
            Button2Title="Charge Member Balance"
            onPressButton1={onPressPayNow}
            onPressButton2={onPressChargeMemberBalance}
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <CustomLargeButton title="Next" onPressButton={onPressNextButton} />
      </View>
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    justifyContent: "space-between",
  },
  textContainer: {
    width: wp("85.64%"),
    alignItems: "flex-start",
    marginTop: hp("2.88%"),
  },
  doubleButtonContiner: {
    marginTop: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
