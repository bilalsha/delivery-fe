import { View } from "react-native";
import { stylesCard } from "../styles/globalStyles";
const Card = (props) => {
  return (
    <View style={{ ...props.styles, ...stylesCard.card }}>
      {props.children}
    </View>
  );
};

export default Card;
