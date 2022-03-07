import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
const Stack = createStackNavigator();
import StartPage from "../pages/StartPage";
import PaymentPage from "../pages/PaymentPage";
import MenuPage from "../pages/MenuPage";
import LocationPage from "../pages/LocationPage";
import DetailsPage from "../pages/DetailsPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import CartPage from "../pages/CartPage";
import Entypo from "react-native-vector-icons/Entypo";
// import TabNavigator from "./TabNavigator";

Entypo.loadFont();
const MainStack = () => {
  const headerOptions = (headerTitle) => {
    return {
      title: headerTitle,
      headerRight: () => <Entypo name="menu" size={32} color={"#FFFFFF"} />,
      headerRightContainerStyle: { marginRight: 10, textAlign: "center" },
    };
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#EE4137", height: 99 },
        headerTitleStyle: {
          color: "#FFFFFF",
          fontFamily: "Poppins400",
          fontSize: 18,
          textAlign: "center",
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        cardStyle: { backgroundColor: "#FFFFFF" },
      }}
      initialRouteName="Start"
    >
      {/* <Stack.Screen name="TabN" component={TabNavigator} /> */}
      <Stack.Screen
        name="Start"
        component={StartPage}
        options={{
          title: "Order Food",
        }}
      />
      <Stack.Screen
        name="Location"
        component={LocationPage}
        options={headerOptions("Your Location")}
      />
      <Stack.Screen
        name="Menu"
        component={MenuPage}
        options={headerOptions("Menu")}
      />
      <Stack.Screen
        name="Details"
        component={DetailsPage}
        options={headerOptions("Details")}
      />
      <Stack.Screen
        name="Cart"
        component={CartPage}
        options={headerOptions("Cart")}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentPage}
        options={headerOptions("Payment Options")}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationPage}
        options={headerOptions("Confirmation")}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
