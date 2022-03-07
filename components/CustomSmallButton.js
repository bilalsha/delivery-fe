import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const CustomSmallButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          backgroundColor: props.buttonState ? "#EE4137" : "#FFFFFF",
          ...styles.Button,
        }}
      >
        <Text
          style={{
            color: props.buttonState ? "#FFFFFF" : "#828282",
            ...styles.textButton,
          }}
        >
          {props.ButtonTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomSmallButton;

const styles = StyleSheet.create({
  Button: {
    width: wp("24%"),
    height: wp("8%"),
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: wp("2.70%"),
    fontFamily: "Poppins400",
    textAlign: "center",
    fontStyle: "normal",
  },
});
