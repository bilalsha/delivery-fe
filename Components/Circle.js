import { StyleSheet, Text, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
EvilIcons.loadFont();

const Circle = () => {
  return (
    <View style={styles.circle}>
      <EvilIcons name="location" size={25} color={`#FFFFFF`} />
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#EE4137",
    borderRadius: 50,
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
