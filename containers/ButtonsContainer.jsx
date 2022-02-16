import { View } from "react-native";
import { useReducer } from "react";
import CustomMediumButton from "../components/CustomMediumButton";
import { globalStyles } from "../styles/globalStyles";
const ReducerFunction = (state, action) => {
  if (action.type === "BUTTON1_ACTIVE") {
    return { button1: action.valueButton1, button2: action.valueButton2 };
  }
  if (action.type === "BUTTON2_ACTIVE") {
    return { button1: action.valueButton1, button2: action.valueButton2 };
  }
};

const ButtonContainer = (props) => {
  const [activeState, dispatchAcitveState] = useReducer(ReducerFunction, {
    button1: true,
    button2: false,
  });

  const onPressButton1 = () => {
    dispatchAcitveState({
      type: "BUTTON1_ACTIVE",
      valueButton1: true,
      valueButton2: false,
    });
  };
  const onPressButton2 = () => {
    dispatchAcitveState({
      type: "BUTTON2_ACTIVE",
      valueButton1: false,
      valueButton2: true,
    });
  };

  return (
    <View style={globalStyles.buttonContainer}>
      <CustomMediumButton
        buttonState={activeState.button1}
        ButtonTitle={props.Button1Title}
        onPress={onPressButton1}
      />
      <CustomMediumButton
        buttonState={activeState.button2}
        ButtonTitle={props.Button2Title}
        onPress={onPressButton2}
      />
    </View>
  );
};

export default ButtonContainer;
