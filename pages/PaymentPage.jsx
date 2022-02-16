import { StyleSheet, Text, View, Button } from "react-native";
import ButtonContainer from "../containers/ButtonsContainer";
import Circle from "../components/Circle";
import CustomButton from "../components/CustomButton";
import { globalStyles } from "../styles/globalStyles";
const PaymentPage = ({ navigation }) => {
  const onPressNextButton = () => {
    navigation.navigate("Confirmation");
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}></View>
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
        <View>
          <ButtonContainer
            Button1Title="Pay Now"
            Button2Title="Charge Member Balance"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Next" onPressButton={onPressNextButton} />
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
    flex: 2,
    justifyContent: "space-between",
  },
  textContainer: {
    width: 352,
    alignItems: "flex-start",
  },
  buttonContainer: {
    width: 335,
    flex: 1.5,
    justifyContent: "flex-end",
  },
});
