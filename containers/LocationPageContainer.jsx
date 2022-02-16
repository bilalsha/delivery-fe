import { StyleSheet, Text, View, TextInput } from "react-native";
import { useReducer, Fragment } from "react";
import { globalStyles } from "../styles/globalStyles";
import CustomMediumButton from "../components/CustomMediumButton";
const ReducerFunction = (state, action) => {
  if (action.type === "BUTTON1_ACTIVE") {
    return {
      button1: action.valueButton1,
      button2: action.valueButton2,
      text: action.text,
    };
  }
  if (action.type === "BUTTON2_ACTIVE") {
    return {
      button1: action.valueButton1,
      button2: action.valueButton2,
      text: action.text,
    };
  }
};

const LocationPageContainer = (props) => {
  const [activeState, dispatchAcitveState] = useReducer(ReducerFunction, {
    button1: true,
    button2: false,
    text: "Please enter your Cart number",
  });

  const onPressButton1 = () => {
    dispatchAcitveState({
      type: "BUTTON1_ACTIVE",
      valueButton1: true,
      valueButton2: false,
      text: "Please enter your Cart number",
    });
  };
  const onPressButton2 = () => {
    dispatchAcitveState({
      type: "BUTTON2_ACTIVE",
      valueButton1: false,
      valueButton2: true,
      text: "Please enter your Hole number",
    });
  };

  return (
    <Fragment>
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
      <View style={styles.textContainer}>
        <Text style={globalStyles.textHeadingSecondary}>
          {activeState.text}
        </Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="24"
          style={{ width: 121, height: 51, backgroundColor: "#F2F2F2" }}
          textAlign={"center"}
          keyboardType="numeric"
        />
      </View>
    </Fragment>
  );
};

export default LocationPageContainer;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
