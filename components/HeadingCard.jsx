import { StyleSheet, Text, View } from "react-native";
const HeadingCard = (props) => {
  return (
    <View style={{ width: 335 }}>
      <Text style={{ ...props.headingStyle, color: props.color }}>
        {props.text}
      </Text>
    </View>
  );
};

export default HeadingCard;

const styles = StyleSheet.create({});
