import { Text, View, ScrollView } from "react-native";
import Circle from "../components/Circle";
import CustomLargeButton from "../components/CustomLargeButton";
import { globalStyles, stylesLocationPage } from "../styles/globalStyles";
import LocationPageComponent from "../components/LocationPageComponent";

const LocationPage = ({ navigation }) => {
  const onPressCustomButton = () => {
    navigation.navigate("Menu");
  };

  const onPressCartNumber = () => {
    console.log("Cart Number");
  };
  const onPressHoleNumber = () => {
    console.log("Hole Number");
  };
  return (
    <View style={globalStyles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.locationIcon}>
          <Circle />
        </View>

        <View style={stylesLocationPage.textContainer}>
          <Text style={globalStyles.textHeading}>Where are you?</Text>
        </View>
        <View style={stylesLocationPage.container}>
          <LocationPageComponent
            Button1Title="Cart Number"
            Button2Title="Hole Number"
            onPressButton1={onPressCartNumber}
            onPressButton2={onPressHoleNumber}
          />
        </View>
      </ScrollView>
      <View style={globalStyles.bottomButtonContainer}>
        <CustomLargeButton title="Next" onPressButton={onPressCustomButton} />
      </View>
    </View>
  );
};

export default LocationPage;
