import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const TextRow = (props) => {
  return (
    <View style={{ ...styles.bottomCardTextContainer, ...props.customStyle }}>
      <Text style={globalStyles.textHeadingSecondary}>{props.title}</Text>
      <Text style={globalStyles.textHeadingSecondary}>{props.price}</Text>
    </View>
  );
};

export default TextRow;

const styles = StyleSheet.create({
  bottomCardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});
