import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./routes/MainStack";
import { useFonts } from "expo-font";
import AppContext from "./store/App-Context";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App() {
  const [loaded] = useFonts({
    Poppins400: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins600: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  //TODO:wirte you machine ip address
  const client = new ApolloClient({
    uri: "http://{machine_IP_address}:5005/graphql",
    cache: new InMemoryCache(),
  });

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
