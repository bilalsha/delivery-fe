import { StyleSheet, Text, View } from "react-native";
import CustomLargeButton from "../components/CustomLargeButton";
import DoubleButtonComponent from "../components/DoubleButtonComponent";
import Circle from "../components/Circle";
import { globalStyles } from "../styles/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StartPage = ({ navigation }) => {
  const onPressCustomButton = () => {
    navigation.navigate("Location");
  };
  const onPressPickUpOrder = () => {
    console.log("Pick up Order");
  };
  const onPressDeliverToMe = () => {
    console.log("Deliver To Me");
  };
  return (
    <View style={styles.mainContainer}>
      <View style={globalStyles.innerContainer}>
        <View style={globalStyles.locationIcon}>
          <Circle />
        </View>
        <View style={styles.textContainer}>
          <Text style={globalStyles.textHeading}>
            Are you picking up your order? Or should we deliver it to you?
          </Text>
        </View>
        <View style={styles.doubleButtonComponent}>
          <DoubleButtonComponent
            Button1Title="Pickup Order"
            Button2Title="Deliver To Me"
            onPressButton1={onPressPickUpOrder}
            onPressButton2={onPressDeliverToMe}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomLargeButton title="Next" onPressButton={onPressCustomButton} />
      </View>
    </View>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  doubleButtonComponent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4.80%"),
  },

  textContainer: {
    width: wp("86%"),
    marginTop: hp("2.52%"),
    alignItems: "flex-start",
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
