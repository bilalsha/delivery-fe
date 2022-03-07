import { Text, View } from "react-native";
import CustomLargeButton from "../components/CustomLargeButton";
import DoubleButtonComponent from "../components/DoubleButtonComponent";
import Circle from "../components/Circle";
import { globalStyles, stylesStartPage } from "../styles/globalStyles";

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
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.innerContainer}>
        <View style={globalStyles.locationIcon}>
          <Circle />
        </View>
        <View style={stylesStartPage.textContainer}>
          <Text style={globalStyles.textHeading}>
            Are you picking up your order? Or should we deliver it to you?
          </Text>
        </View>
        <View style={stylesStartPage.doubleButtonComponent}>
          <DoubleButtonComponent
            Button1Title="Pickup Order"
            Button2Title="Deliver To Me"
            onPressButton1={onPressPickUpOrder}
            onPressButton2={onPressDeliverToMe}
          />
        </View>
      </View>
      <View style={globalStyles.bottomButtonContainer}>
        <CustomLargeButton title="Next" onPressButton={onPressCustomButton} />
      </View>
    </View>
  );
};

export default StartPage;
