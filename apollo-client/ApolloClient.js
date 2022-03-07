import { ApolloClient, InMemoryCache } from "@apollo/client";
import { IP_ADDRESS } from "@env";
export const Apollo_Client = () => {
  const client = new ApolloClient({
    uri: IP_ADDRESS,
    cache: new InMemoryCache(),
  });

  return client;
};
