import { StyleSheet, Text, View, TextInput } from "react-native";
import { useReducer, Fragment } from "react";
import { globalStyles } from "../styles/globalStyles";
import CustomMediumButton from "./CustomMediumButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from "react-native-responsive-screen";
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

const LocationPageComponent = (props) => {
  const [activeState, dispatchAcitveState] = useReducer(ReducerFunction, {
    button1: true,
    button2: false,
    text: "Please enter your Cart number",
  });

  const onPressButton1 = (action) => {
    dispatchAcitveState({
      type: "BUTTON1_ACTIVE",
      valueButton1: true,
      valueButton2: false,
      text: "Please enter your Cart number",
    });
    action();
  };
  const onPressButton2 = (action) => {
    dispatchAcitveState({
      type: "BUTTON2_ACTIVE",
      valueButton1: false,
      valueButton2: true,
      text: "Please enter your Hole number",
    });
    action();
  };

  return (
    <Fragment>
      <View style={globalStyles.buttonContainer}>
        <CustomMediumButton
          buttonState={activeState.button1}
          ButtonTitle={props.Button1Title}
          onPress={() => onPressButton1(props.onPressButton1)}
        />
        <CustomMediumButton
          buttonState={activeState.button2}
          ButtonTitle={props.Button2Title}
          onPress={() => onPressButton2(props.onPressButton2)}
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
          style={{
            width: wp("30%"),
            height: hp("6%"),
            backgroundColor: "#F2F2F2",
          }}
          textAlign={"center"}
          keyboardType="numeric"
        />
      </View>
    </Fragment>
  );
};

export default LocationPageComponent;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: heightPercentageToDP("4.20%"),
  },
  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: heightPercentageToDP("3.0%"),
  },
});