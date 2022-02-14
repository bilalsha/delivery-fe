import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuPage from "../pages/MenuPage";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
const Tab = createBottomTabNavigator();
Entypo.loadFont();
MaterialCommunityIcons.loadFont();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#EE4137",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarStyle: {
          borderTopLeftRadius: 33,
          borderTopRightRadius: 33,
          backgroundColor: "#FBFBFB",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Menu"
        component={MenuPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="menu" size={32} color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={32}
              color={color}
            />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
export default TabNavigator;
