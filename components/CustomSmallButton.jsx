import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
    width: 100,
    height: 33,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 11,
    fontFamily: "Poppins400",
    textAlign: "center",
    fontStyle: "normal",
  },
});
