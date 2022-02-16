import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressButton}>
      <View style={styles.buttonContainer}>
        <Text style={globalStyles.textButton}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 335,
    height: 50,
    backgroundColor: "#EE4137",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});
