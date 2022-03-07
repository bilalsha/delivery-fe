import { View, Text, TouchableOpacity } from "react-native";
import { stylesCounterDetailsPage } from "../styles/globalStyles";
const CounterDetailsPage = (props) => {
  return (
    <View style={stylesCounterDetailsPage.counterContainer}>
      <TouchableOpacity onPress={props.onPressMinus} style={{ flex: 1 }}>
        <View>
          <Text style={stylesCounterDetailsPage.counterText}>-</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={stylesCounterDetailsPage.counterText}>
          {props.itemsCounter}
        </Text>
      </View>
      <TouchableOpacity onPress={props.onPressPlus} style={{ flex: 1 }}>
        <View>
          <Text style={stylesCounterDetailsPage.counterText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterDetailsPage;
