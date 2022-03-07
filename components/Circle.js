import { View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { stylesCircle } from "../styles/globalStyles";
EvilIcons.loadFont();

const Circle = () => {
  return (
    <View style={stylesCircle.circle}>
      <EvilIcons name="location" size={25} color={`#FFFFFF`} />
    </View>
  );
};

export default Circle;
