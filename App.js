import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./routes/MainStack";
import { SafeAreaView } from "react-native";
import { Fragment } from "react";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    Poppins400: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins600: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "red" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({});
