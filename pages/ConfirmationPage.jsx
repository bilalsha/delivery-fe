import { StyleSheet, Text, View, Button } from "react-native";
const ConfirmationPage = ({ navigation }) => {
  return (
    <View>
      <Text>ConfirmationPage</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ConfirmationPage;
