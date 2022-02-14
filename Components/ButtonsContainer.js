import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useReducer } from "react";
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
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPressButton1}>
        <View
          style={{
            backgroundColor: activeState.button1 ? "#EE4137" : "#FFFFFF",
            ...globalStyles.ButtonContainer,
          }}
        >
          <Text
            style={{
              color: activeState.button1 ? "#FFFFFF" : "#828282",
              ...globalStyles.textButtonContainer,
            }}
          >
            {props.Button1Title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressButton2}>
        <View
          style={{
            backgroundColor: activeState.button2 ? "#EE4137" : "#FFFFFF",
            ...globalStyles.ButtonContainer,
          }}
        >
          <Text
            style={{
              color: activeState.button2 ? "#FFFFFF" : "#828282",
              ...globalStyles.textButtonContainer,
            }}
          >
            {props.Button2Title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    width: 335,
    height: 50,
    borderRadius: 15,
  },
});
