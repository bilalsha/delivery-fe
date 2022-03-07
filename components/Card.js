import { StyleSheet, View, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Card = (props) => {
  return (
    <View style={{ ...props.styles, ...styles.card }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: widthPercentageToDP("4.13%"),
    marginVertical: heightPercentageToDP("2.04%"),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00000012",
  },
});
