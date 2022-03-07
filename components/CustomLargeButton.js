import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CustomLargeButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressButton}>
      <View style={styles.buttonContainer}>
        <Text style={globalStyles.textButton}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomLargeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: wp("81%"),
    height: hp("6.10%"),
    backgroundColor: "#EE4137",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: wp("4%"),
  },
});
