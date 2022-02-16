import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useReducer } from "react";

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

  const onPressButton1 = () => {
    dispatchAcitveState({
      type: "BUTTON1_ACTIVE",
      valueButton1: true,
      valueButton2: false,
      valueButton3: false,
    });
  };
  const onPressButton2 = () => {
    dispatchAcitveState({
      type: "BUTTON2_ACTIVE",
      valueButton1: false,
      valueButton2: true,
      valueButton3: false,
    });
  };
  const onPressButton3 = () => {
    dispatchAcitveState({
      type: "BUTTON3_ACTIVE",
      valueButton1: false,
      valueButton2: false,
      valueButton3: true,
    });
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPressButton1}>
        <View
          style={{
            backgroundColor: activeState.button1 ? "#EE4137" : "#FFFFFF",
            ...styles.Button,
          }}
        >
          <Text
            style={{
              color: activeState.button1 ? "#FFFFFF" : "#828282",
              ...styles.textButton,
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
            ...styles.Button,
          }}
        >
          <Text
            style={{
              color: activeState.button2 ? "#FFFFFF" : "#828282",
              ...styles.textButton,
            }}
          >
            {props.Button2Title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressButton3}>
        <View
          style={{
            backgroundColor: activeState.button3 ? "#EE4137" : "#FFFFFF",
            ...styles.Button,
          }}
        >
          <Text
            style={{
              color: activeState.button3 ? "#FFFFFF" : "#828282",
              ...styles.textButton,
            }}
          >
            {props.Button3Title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TripleButtonsContainer;

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
