import { Text, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
const HeadingCard = (props) => {
  return (
    <View style={{ width: widthPercentageToDP("81%") }}>
      <Text style={{ ...props.headingStyle, color: props.color }}>
        {props.text}
      </Text>
    </View>
  );
};

export default HeadingCard;
