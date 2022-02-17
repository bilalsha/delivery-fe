import { StyleSheet, Text, View } from "react-native";
import Circle from "../components/Circle";
import CustomLargeButton from "../components/CustomLargeButton";
import { globalStyles } from "../styles/globalStyles";
import LocationPageContainer from "../containers/LocationPageContainer";
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
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.innerContainer}>
        <View style={globalStyles.locationIcon}>
          <Circle />
        </View>

        <View style={{ width: 335 }}>
          <Text style={globalStyles.textHeading}>Where are you?</Text>
        </View>

        <LocationPageContainer
          Button1Title="Cart Number"
          Button2Title="Hole Number"
          onPressButton1={onPressCartNumber}
          onPressButton2={onPressHoleNumber}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomLargeButton title="Next" onPressButton={onPressCustomButton} />
      </View>
    </View>
  );
};

export default LocationPage;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 2,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
});
