import { Text, View, TouchableOpacity } from "react-native";
import { stylesCustomSmallButton } from "../styles/globalStyles";
const CustomSmallButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          backgroundColor: props.buttonState ? "#EE4137" : "#FFFFFF",
          ...stylesCustomSmallButton.Button,
        }}
      >
        <Text
          style={{
            color: props.buttonState ? "#FFFFFF" : "#828282",
            ...stylesCustomSmallButton.textButton,
          }}
        >
          {props.ButtonTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomSmallButton;
