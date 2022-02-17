import { StyleSheet, View, Text } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...props.styles, ...styles.card }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00000012",
  },
});
