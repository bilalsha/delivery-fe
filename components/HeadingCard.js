import { Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const HeadingCard = (props) => {
  return (
    <View style={{ width: wp("81%") }}>
      <Text style={{ ...props.headingStyle, color: props.color }}>
        {props.text}
      </Text>
    </View>
  );
};

export default HeadingCard;
