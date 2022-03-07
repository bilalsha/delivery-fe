import { View, Text, TouchableOpacity } from "react-native";
import { stylesConter } from "../styles/globalStyles";

const Counter = (props) => {
  return (
    <View style={stylesConter.counterContainer}>
      <TouchableOpacity
        onPress={props.onPressMinus}
        style={{ ...stylesConter.minusContainer }}
      >
        <Text style={stylesConter.minusText}>-</Text>
      </TouchableOpacity>

      <Text style={stylesConter.counterText}>{props.itemsCounter}</Text>

      <TouchableOpacity
        onPress={props.onPressPlus}
        style={{ ...stylesConter.plusContainer }}
      >
        <Text style={stylesConter.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
