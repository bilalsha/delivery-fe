import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles, stylesCustomLargeButton } from "../styles/globalStyles";

const CustomLargeButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressButton}>
      <View style={stylesCustomLargeButton.buttonContainer}>
        <Text style={globalStyles.textButton}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomLargeButton;
