import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./routes/MainStack";
import { useFonts } from "expo-font";
import AppContext from "./store/App-Context";
import { ApolloProvider } from "@apollo/client";
import { Apollo_Client } from "./apollo-client/ApolloClient";
export default function App() {
  const [loaded] = useFonts({
    Poppins400: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins600: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const client = Apollo_Client();

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <AppContext>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </AppContext>
    </ApolloProvider>
  );
}
