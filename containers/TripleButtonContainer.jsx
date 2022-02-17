import { View } from "react-native";
import { useReducer } from "react";
import CustomSmallButton from "../components/CustomSmallButton";
import { globalStyles } from "../styles/globalStyles";

const ReducerFunction = (state, action) => {
  if (action.type === "BUTTON1_ACTIVE") {
    return {
      button1: action.valueButton1,
      button2: action.valueButton2,
      button3: action.valueButton3,
    };
  }
  if (action.type === "BUTTON2_ACTIVE") {
    return {
      button1: action.valueButton1,
      button2: action.valueButton2,
      button3: action.valueButton3,
    };
  }
  if (action.type === "BUTTON3_ACTIVE") {
    return {
      button1: action.valueButton1,
      button2: action.valueButton2,
      button3: action.valueButton3,
    };
  }
};

const TripleButtonsContainer = (props) => {
  const [activeState, dispatchAcitveState] = useReducer(ReducerFunction, {
    button1: true,
    button2: false,
    button3: false,
  });

  const onPressButton1 = (action) => {
    dispatchAcitveState({
      type: "BUTTON1_ACTIVE",
      valueButton1: true,
      valueButton2: false,
      valueButton3: false,
    });
    action();
  };
  const onPressButton2 = (action) => {
    dispatchAcitveState({
      type: "BUTTON2_ACTIVE",
      valueButton1: false,
      valueButton2: true,
      valueButton3: false,
    });
    action();
  };
  const onPressButton3 = (action) => {
    dispatchAcitveState({
      type: "BUTTON3_ACTIVE",
      valueButton1: false,
      valueButton2: false,
      valueButton3: true,
    });
    action();
  };

  return (
    <View style={globalStyles.buttonContainer}>
      <CustomSmallButton
        onPress={() => onPressButton1(props.onPressButton1)}
        buttonState={activeState.button1}
        ButtonTitle={props.Button1Title}
      />
      <CustomSmallButton
        onPress={() => onPressButton2(props.onPressButton2)}
        buttonState={activeState.button2}
        ButtonTitle={props.Button2Title}
      />
      <CustomSmallButton
        onPress={() => onPressButton3(props.onPressButton3)}
        buttonState={activeState.button3}
        ButtonTitle={props.Button3Title}
      />
    </View>
  );
};

export default TripleButtonsContainer;
