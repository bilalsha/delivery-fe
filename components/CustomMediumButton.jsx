import { globalStyles } from "../styles/globalStyles";
import { TouchableOpacity, Text, View } from "react-native";

const CustomMediumButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          backgroundColor: props.buttonState ? "#EE4137" : "#FFFFFF",
          ...globalStyles.ButtonContainer,
        }}
      >
        <Text
          style={{
            color: props.buttonState ? "#FFFFFF" : "#828282",
            ...globalStyles.textButtonContainer,
          }}
        >
          {props.ButtonTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomMediumButton;
