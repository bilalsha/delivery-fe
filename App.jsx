import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./routes/MainStack";
import { useFonts } from "expo-font";
import AppContext from "./store/App-Context";
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
    <AppContext>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppContext>
  );
}
