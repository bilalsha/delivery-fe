import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Components/CustomButton";
import ButtonContainer from "../Components/ButtonsContainer";
import Circle from "../Components/Circle";
import { globalStyles } from "../styles/globalStyles";
const StartPage = ({ navigation }) => {
  const onPressCustomButton = () => {
    navigation.navigate("Location");
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}></View>
      <View style={globalStyles.innerContainer}>
        <View style={globalStyles.locationIcon}>
          <Circle />
        </View>
        <View style={styles.textContainer}>
          <Text style={globalStyles.textHeading}>
            Are you picking up your order? Or should we deliver it to you?
          </Text>
        </View>

        <View style={{ width: 335 }}>
          <ButtonContainer
            Button1Title="Pickup Order"
            Button2Title="Deliver To Me"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Next" onPressButton={onPressCustomButton} />
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

  textContainer: {
    width: 352,
    alignItems: "flex-start",
  },
  buttonContainer: {
    width: 335,
    flex: 2,
    justifyContent: "flex-end",
  },
});
